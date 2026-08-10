"use client";

import { useState } from "react";
import { quizQuestions, heroResults, type EpicHeroResult } from "@/lib/data/quiz";

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<EpicHeroResult | null>(null);

  const handleAnswer = (scoresToAdd: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(scoresToAdd).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });
    setScores(newScores);

    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Calculate winner
      const winner = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0];
      const heroResult = heroResults.find((h) => h.id === winner[0]);
      setResult(heroResult || heroResults[0]);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrent(0);
    setScores({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
          Your Epic Hero
        </p>
        <div
          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold font-display"
          style={{ backgroundColor: `${result.color}20`, color: result.color }}
        >
          {result.name[0]}
        </div>
        <h1 className="text-4xl font-bold mb-2 font-display">{result.name}</h1>
        <p className="text-lg text-[var(--accent-gold)] mb-2">{result.title}</p>
        <p className="text-sm text-[var(--text-muted)] mb-6">{result.epic}</p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto">
          {result.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {result.traits.map((trait) => (
            <span
              key={trait}
              className="text-sm px-3 py-1 rounded-full border"
              style={{ borderColor: result.color, color: result.color }}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Runner-up */}
        {Object.entries(scores).length > 1 && (
          <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] mb-8">
            <p className="text-xs text-[var(--text-muted)] mb-2">
              Runner-up
            </p>
            {Object.entries(scores)
              .sort((a, b) => b[1] - a[1])
              .slice(1, 3)
              .map(([id]) => {
                const hero = heroResults.find((h) => h.id === id);
                return hero ? (
                  <p key={id} className="text-sm">
                    <span className="font-medium">{hero.name}</span>
                    <span className="text-[var(--text-muted)]">
                      {" "}
                      ({hero.epic})
                    </span>
                  </p>
                ) : null;
              })}
          </div>
        )}

        <button
          onClick={restart}
          className="px-6 py-3 bg-[var(--accent-gold)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-gold-light)] transition-colors"
        >
          Take Again
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6 font-display">
          Which Epic Hero Are You?
        </h1>
        <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto">
          Seven questions from the world of epics. Answer honestly — or as
          honestly as a hero can.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-10 max-w-md mx-auto">
          {heroResults.slice(0, 6).map((h) => (
            <div key={h.id} className="text-center">
              <div
                className="w-12 h-12 rounded-full mx-auto mb-1 flex items-center justify-center text-lg font-bold font-display"
                style={{ backgroundColor: `${h.color}20`, color: h.color }}
              >
                {h.name[0]}
              </div>
              <p className="text-[10px] text-[var(--text-muted)]">{h.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-[var(--accent-gold)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-gold-light)] transition-colors text-lg"
        >
          Begin
        </button>
      </div>
    );
  }

  const q = quizQuestions[current];
  const progress = ((current + 1) / quizQuestions.length) * 100;

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2">
          <span>
            Question {current + 1} of {quizQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--accent-gold)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold mb-8 font-display">{q.question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.scores)}
            className="w-full text-left p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent-gold)] hover:bg-[var(--bg-hover)] transition-all text-sm"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
