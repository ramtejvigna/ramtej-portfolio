function formatContribDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function ContribHeatmap({ contribData }) {
  const WEEKS = 30;
  const DAYS  = 7;
  const size  = 9;
  const gap   = 2;

  const levelColors = [
    "rgba(255,255,255,0.04)",
    "rgba(34,197,94,0.22)",
    "rgba(34,197,94,0.48)",
    "rgba(34,197,94,0.74)",
    "#22c55e",
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentWeekStart = new Date(today);
  currentWeekStart.setDate(today.getDate() - today.getDay());

  const gridStart = new Date(currentWeekStart);
  gridStart.setDate(currentWeekStart.getDate() - (WEEKS - 1) * 7);

  const byDate = new Map();
  if (Array.isArray(contribData)) {
    for (const entry of contribData) {
      if (entry?.date) byDate.set(entry.date, entry);
    }
  }

  const empty = { count: 0, level: 0 };
  const weeks = [];

  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < DAYS; d++) {
      const cellDate = new Date(gridStart);
      cellDate.setDate(gridStart.getDate() + w * 7 + d);
      week.push(cellDate > today ? null : byDate.get(formatContribDateKey(cellDate)) ?? empty);
    }
    weeks.push(week);
  }

  const svgW = WEEKS * (size + gap) - gap;
  const svgH = DAYS  * (size + gap) - gap;

  return (
    <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`} style={{ display: "block" }}>
      {weeks.map((week, w) =>
        week.map((day, d) =>
          day ? (
            <rect
              key={`${w}-${d}`}
              x={w * (size + gap)}
              y={d * (size + gap)}
              width={size}
              height={size}
              rx={2}
              fill={levelColors[Math.min(day.level ?? 0, 4)]}
            />
          ) : null
        )
      )}
    </svg>
  );
}
