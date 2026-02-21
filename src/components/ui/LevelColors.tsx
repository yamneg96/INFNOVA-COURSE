const LEVEL_COLORS: Record<string, string> = {
  "Beginner": "bg-green-100 text-green-600",
  "Intermediate": "bg-blue-100 text-blue-600",
  "Advanced": "bg-purple-100 text-purple-600",
};

interface LevelBadgeProps {
  level?: string;
  variant?: 'absolute' | 'inline';
}

export default function LevelBadge({ level, variant = 'absolute' }: LevelBadgeProps) {
  if (!level) return null;

  const levelClass = LEVEL_COLORS[level] || "bg-slate-100 text-slate-600";
  
  // Design-specific style for Hero (Inline)
  const inlineStyles = `bg-[#DBEAFE] ${levelClass} border border-blue-200/20 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm`;
  const absoluteStyles = `absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] ${levelClass} bg-white/90 backdrop-blur-sm`;

  return (
    <span className={variant === 'inline' ? inlineStyles : absoluteStyles}>
      {level}
    </span>
  );
}