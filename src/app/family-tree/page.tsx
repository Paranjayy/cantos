"use client";

import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  BackgroundVariant,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { familyTrees, type TreeNode } from "@/lib/data/family-trees";

function PersonNode({ data }: { data: { node: TreeNode; color: string } }) {
  const { node, color } = data;
  const isPandava = node.tags?.includes("pandava");
  const isKaurava = node.tags?.includes("kaurava");
  const isDivine = node.tags?.includes("divine");
  const isKing = node.tags?.includes("king");

  let borderColor = "var(--border)";
  if (isPandava) borderColor = "#3B82F6";
  else if (isKaurava) borderColor = "#EF4444";
  else if (isDivine) borderColor = "#A855F7";
  else if (isKing) borderColor = "var(--accent-gold)";

  return (
    <div
      className="px-4 py-3 rounded-xl bg-[var(--bg-card)] border-2 min-w-[140px] text-center shadow-lg"
      style={{ borderColor }}
    >
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-none" />
      <div className="font-semibold text-sm font-display">{node.name}</div>
      {node.title && (
        <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
          {node.title}
        </div>
      )}
      {node.notes && (
        <div className="text-[9px] text-[var(--text-muted)] mt-1 line-clamp-2 italic">
          {node.notes}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-none" />
    </div>
  );
}

const nodeTypes = { personNode: PersonNode };

export default function FamilyTreeExplorer() {
  const [selectedTree, setSelectedTree] = useState(familyTrees[0]);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const generationGroups: Record<number, TreeNode[]> = {};

    selectedTree.nodes.forEach((node) => {
      if (!generationGroups[node.generation]) {
        generationGroups[node.generation] = [];
      }
      generationGroups[node.generation].push(node);
    });

    const generations = Object.keys(generationGroups)
      .map(Number)
      .sort((a, b) => a - b);

    const nodeSpacingX = 200;
    const nodeSpacingY = 140;

    generations.forEach((gen, genIndex) => {
      const nodesInGen = generationGroups[gen];
      const totalWidth = nodesInGen.length * nodeSpacingX;
      const startX = -totalWidth / 2 + nodeSpacingX / 2;

      nodesInGen.forEach((node, nodeIndex) => {
        nodes.push({
          id: node.id,
          type: "personNode",
          position: {
            x: startX + nodeIndex * nodeSpacingX,
            y: genIndex * nodeSpacingY,
          },
          data: { node, color: "#C9A96E" },
        });

        if (node.parent) {
          edges.push({
            id: `${node.parent}-${node.id}`,
            source: node.parent,
            target: node.id,
            type: "smoothstep",
            animated: false,
          });
        }
      });
    });

    // Add spouse connections
    selectedTree.nodes.forEach((node) => {
      if (node.spouse && nodes.find((n) => n.id === node.spouse)) {
        edges.push({
          id: `spouse-${node.id}-${node.spouse}`,
          source: node.id,
          target: node.spouse,
          type: "smoothstep",
          style: { strokeDasharray: "5,5", stroke: "var(--accent-gold)" },
          animated: false,
        });
      }
    });

    return { nodes, edges };
  }, [selectedTree]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const treeNode = selectedTree.nodes.find((n) => n.id === node.id);
      setSelectedNode(treeNode || null);
    },
    [selectedTree]
  );

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-display">
          Family Trees
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          Navigate the complex dynasties that drive the epics. Click nodes
          for details. Zoom and pan to explore.
        </p>
      </div>

      {/* Tree Selector */}
      <div className="flex flex-wrap gap-3 mb-6">
        {familyTrees.map((tree) => (
          <button
            key={tree.id}
            onClick={() => {
              setSelectedTree(tree);
              setSelectedNode(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedTree.id === tree.id
                ? "bg-[var(--accent-gold)] text-[var(--bg-primary)]"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
            }`}
          >
            {tree.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--text-muted)] mb-4">
        {selectedTree.description}
      </p>

      {/* Flow Diagram */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden"
        style={{ height: "600px" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.2}
          maxZoom={2}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="var(--border)"
          />
          <Controls className="!bg-[var(--bg-card)] !border-[var(--border)] !rounded-lg" />
          <MiniMap
            nodeColor={() => "#C9A96E"}
            maskColor="rgba(0,0,0,0.5)"
            className="!bg-[var(--bg-card)] !border-[var(--border)] !rounded-lg"
          />
        </ReactFlow>
      </div>

      {/* Node Detail Panel */}
      {selectedNode && (
        <div className="mt-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] animate-fade-in-up">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold font-display">
                {selectedNode.name}
              </h2>
              {selectedNode.title && (
                <p className="text-[var(--text-muted)] italic">
                  {selectedNode.title}
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {selectedNode.notes && (
            <p className="text-[var(--text-secondary)] mb-4">
              {selectedNode.notes}
            </p>
          )}

          <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
            <span>Generation: {selectedNode.generation}</span>
            {selectedNode.parent && (
              <>
                <span className="text-[var(--border)]">·</span>
                <span>
                  Parent:{" "}
                  {selectedTree.nodes.find((n) => n.id === selectedNode.parent)
                    ?.name || selectedNode.parent}
                </span>
              </>
            )}
            {selectedNode.spouse && (
              <>
                <span className="text-[var(--border)]">·</span>
                <span>
                  Spouse:{" "}
                  {selectedTree.nodes.find((n) => n.id === selectedNode.spouse)
                    ?.name || selectedNode.spouse}
                </span>
              </>
            )}
          </div>

          {selectedNode.tags && selectedNode.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {selectedNode.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#3B82F6" }} />
          <span>Pandava</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#EF4444" }} />
          <span>Kaurava</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#A855F7" }} />
          <span>Divine</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "var(--accent-gold)" }} />
          <span>Royal</span>
        </div>
      </div>
    </div>
  );
}
