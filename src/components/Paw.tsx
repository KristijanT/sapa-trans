export default function Paw({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="13" cy="29" rx="6" ry="8" />
      <ellipse cx="26" cy="16" rx="6" ry="9" />
      <ellipse cx="38" cy="16" rx="6" ry="9" />
      <ellipse cx="51" cy="29" rx="6" ry="8" />
      <path d="M32 30c-9 0-18 9-18 17 0 6 5 8 10 7 3-.7 5-1.5 8-1.5s5 .8 8 1.5c5 1 10-1 10-7 0-8-9-17-18-17z" />
    </svg>
  );
}
