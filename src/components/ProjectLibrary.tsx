import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { chapters } from '../data/chapters';
import type { ChapterId } from '../data/chapters';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

const ease = [0.22, 1, 0.36, 1] as const;

type Filter = 'all' | ChapterId;

export function ProjectLibrary({
  onOpen,
  filter,
  onFilterChange,
}: {
  onOpen: (p: Project) => void;
  filter: Filter;
  onFilterChange: (f: Filter) => void;
}) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchFilter = filter === 'all' || p.chapter === filter;
      if (!matchFilter) return false;
      if (!q) return true;
      const hay = [p.title, p.role, p.summary, ...p.tags].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-page px-6 md:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-eyebrow">Project Library</span>
            <h2 className="display-2 mt-6 text-4xl text-ink md:text-6xl">
              Every project,
              <br />
              <span className="editorial text-rust">filtered</span> to find.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            챕터, 키워드, 역할로 빠르게 탐색하세요. 외부 고객사 프로젝트는 계약상의
            사유로 익명 처리되어 있습니다.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="-mx-2 flex flex-1 flex-wrap items-center gap-1 px-2">
            <FilterChip active={filter === 'all'} onClick={() => onFilterChange('all')}>
              All
            </FilterChip>
            {chapters.map((c) => (
              <FilterChip
                key={c.id}
                active={filter === c.id}
                onClick={() => onFilterChange(c.id)}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags, roles…"
              className="w-full rounded-full border border-ink/15 bg-white/40 px-4 py-2.5 pr-10 text-[13px] text-ink placeholder:text-mute focus:border-ink/30 focus:bg-white/70 focus:outline-none"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[11px] text-mute">
              ⌕
            </span>
          </div>
        </div>

        <div className="mt-3 font-mono text-[11px] text-mute">
          {String(filtered.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} projects
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <motion.button
              layout
              key={p.id}
              onClick={() => onOpen(p)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease, delay: (i % 6) * 0.04 }}
              whileHover={{ y: -3 }}
              className="surface-card group relative flex h-full flex-col items-start overflow-hidden rounded-2xl p-6 text-left"
            >
              <div className="flex w-full items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  {chapters.find((c) => c.id === p.chapter)?.name}
                </span>
                {p.isConfidential && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/40 px-2 py-0.5 text-[10px] text-mute">
                    <span className="h-1 w-1 rounded-full bg-mute" />
                    Withheld
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-[18px] font-medium leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-1 text-[12px] text-mute">{p.period}</p>

              <p className="mt-4 line-clamp-3 text-[13px] leading-relaxed text-ink-soft">
                {p.summary}
              </p>

              {p.proof?.[0] && (
                <p className="mt-4 line-clamp-1 border-t border-ink/[0.06] pt-3 text-[11px] text-moss">
                  ↳ {p.proof[0]}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-1">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-ink/[0.04] px-1.5 py-0.5 text-[10px] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[12px] text-mute transition-colors group-hover:text-ink">
                Open detail
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-ink/15 p-12 text-center text-ink-soft">
            No projects match your search.
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-3.5 py-1.5 text-[12px] transition-colors ${
        active ? 'text-ivory' : 'text-mute hover:text-ink'
      }`}
    >
      {active && (
        <motion.span
          layoutId="filter-active"
          className="absolute inset-0 rounded-full bg-ink"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
