"use client";

import { useState, useCallback, useMemo } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  MarkerType,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { characters, type Character } from "@/lib/data/characters";
import { connections, type Connection } from "@/lib/data/connections";
import { epics } from "@/lib/data/epics";

const epicColors = Object.fromEntries(epics.map((e) => [e.slug, e.color]));

const nodeTypes = {
  character: ({ data }: { data: { name: string; epic: string; title: string } }) => (
    <div
      className="px-4 py-3 rounded-xl border-2 shadow-lg min-w-[120px] text-center cursor-pointer transition-all hover:scale-105"
      style={{
        borderColor: epicColors[data.epic] || "#666",
        backgroundColor: `${epicColors[data.epic]}15`,
      }}
    >
      <div
        className="font-bold font-display text-sm"
        style={{ color: epicColors[data.epic] }}
      >
        {data.name}
      </div>
      <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{data.title}</div>
      <div className="text-[9px] text-[var(--text-muted)] opacity-60 mt-0.5">{data.epic}</div>
    </div>
  ),
};

type LayoutDirection = "TB" | "LR";

const typeStyleMap: Record<string, { color: string; label: string; dashed: boolean }> = {
  parallel: { color: "#60A5FA", label: "parallel", dashed: false },
  inspiration: { color: "#F59E0B", label: "inspiration", dashed: true },
  counterpart: { color: "#10B981", label: "counterpart", dashed: false },
  archetype: { color: "#A78BFA", label: "archetype", dashed: true },
};

function buildLayout(chars: Character[], conns: Connection[], dir: LayoutDirection) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const epicGroups = new Map<string, Character[]>();
  chars.forEach((c) => {
    const epicName = epics.find((e) => e.slug === c.epic)?.title || c.epic;
    if (!epicGroups.has(epicName)) epicGroups.set(epicName, []);
    epicGroups.get(epicName)!.push(c);
  });

  const epicsList = Array.from(epicGroups.entries());
  const gapX = 320;
  const gapY = 120;

  epicsList.forEach(([, epicChars], ei) => {
    const groupX = dir === "LR" ? ei * gapX : 0;
    const groupY = dir === "LR" ? 0 : ei * gapY;

    epicChars.forEach((char, ci) => {
      const charX = dir === "LR" ? groupX : groupX + ci * 180;
      const charY = dir === "LR" ? groupY + ci * 120 : groupY;
      nodes.push({
        id: char.id,
        position: { x: charX, y: charY },
        data: {
          name: char.name,
          epic: epics.find((e) => e.slug === char.epic)?.title || char.epic,
          title: char.title,
        },
        type: "character",
        sourcePosition: dir === "LR" ? Position.Right : Position.Bottom,
        targetPosition: dir === "LR" ? Position.Left : Position.Top,
      });
    });
  });

  conns.forEach((conn) => {
    const sourceId = characters.find((c) => c.name === conn.from.name)?.id;
    const targetId = characters.find((c) => c.name === conn.to.name)?.id;
    if (!sourceId || !targetId) return;

    const s = typeStyleMap[conn.type] || { color: "#666", label: conn.type, dashed: false };

    edges.push({
      id: `${sourceId}-${targetId}`,
      source: sourceId,
      target: targetId,
      label: conn.label,
      animated: conn.type === "inspiration" || conn.type === "archetype",
      style: { stroke: s.color, strokeWidth: 2, strokeDasharray: s.dashed ? "6 3" : undefined },
      labelStyle: { fill: s.color, fontSize: 10, fontWeight: 600 },
      markerEnd: { type: MarkerType.ArrowClosed, color: s.color, width: 16, height: 16 },
    });
  });

  return { nodes, edges };
}

export default function RelationshipGraph() {
  const [selectedEpic, setSelectedEpic] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [layout, setLayout] = useState<LayoutDirection>("TB");

  const filteredChars = useMemo(() => {
    if (selectedEpic === "all") return characters;
    return characters.filter((c) => c.epic === selectedEpic);
  }, [selectedEpic]);

  const filteredConns = useMemo(() => {
    let conns = connections;
    if (selectedEpic !== "all") {
      conns = conns.filter(
        (c) =>
          filteredChars.some((ch) => ch.name === c.from.name) ||
          filteredChars.some((ch) => ch.name === c.to.name)
      );
    }
    if (selectedType !== "all") {
      conns = conns.filter((c) => c.type === selectedType);
    }
    return conns;
  }, [selectedEpic, selectedType, filteredChars]);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => buildLayout(filteredChars, filteredConns, layout),
    [filteredChars, filteredConns, layout]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onInit = useCallback(() => {}, []);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-[var(--border)] flex flex-wrap items-center gap-3">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Filter:</span>
        <select
          value={selectedEpic}
          onChange={(e) => setSelectedEpic(e.target.value)}
          className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
        >
          <option value="all">All Epics</option>
          {epics.map((epic) => (
            <option key={epic.slug} value={epic.slug}>
              {epic.title}
            </option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-gold)]"
        >
          <option value="all">All Connection Types</option>
          <option value="parallel">Parallel</option>
          <option value="inspiration">Inspiration</option>
          <option value="counterpart">Counterpart</option>
          <option value="archetype">Archetype</option>
        </select>

        <button
          onClick={() => setLayout((l) => (l === "TB" ? "LR" : "TB"))}
          className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-sm text-[var(--text)] hover:border-[var(--border-hover)] transition-colors"
        >
          Layout: {layout === "TB" ? "↓ Vertical" : "→ Horizontal"}
        </button>

        <span className="text-xs text-[var(--text-muted)] ml-auto">
          {nodes.length} characters · {edges.length} connections
        </span>
      </div>

      <div className="px-4 py-2 border-b border-[var(--border)] flex flex-wrap gap-3 text-[10px]">
        {Object.entries(typeStyleMap).map(([key, val]) => (
          <span key={key} className="flex items-center gap-1">
            <svg width="20" height="10">
              <line
                x1="0" y1="5" x2="20" y2="5"
                stroke={val.color}
                strokeWidth="2"
                strokeDasharray={val.dashed ? "4 2" : undefined}
              />
            </svg>
            {val.label}
          </span>
        ))}
      </div>

      <div className="flex-1" style={{ height: "calc(100vh - 220px)" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onInit={onInit}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.2}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
        >
          <Controls
            className="!bg-[var(--bg-card)] !border-[var(--border)] !shadow-lg [&>button]:!bg-[var(--bg-card)] [&>button]:!border-[var(--border)] [&>button]:!text-[var(--text)] [&>button:hover]:!bg-[var(--bg-hover)]"
          />
          <Background color="var(--border)" gap={20} />
        </ReactFlow>
      </div>
    </div>
  );
}
