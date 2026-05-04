import type { ReactNode } from 'react';

export function Marquee({
  children,
  reverse = false,
  speed = 40,
  className = '',
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={{
          animation: `${reverse ? 'marquee-rev' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
