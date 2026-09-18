export default function SneakerMark({ accent = 'var(--color-orange)' }) {
  return (
    <svg viewBox="0 0 220 120" aria-hidden="true">
      <path
        d="M14 92 C14 78 26 70 40 66 L86 50 C100 44 112 40 128 40 C150 40 168 50 182 62 C196 74 204 84 204 92 L204 100 L14 100 Z"
        fill="none"
        stroke="var(--color-chalk)"
        strokeWidth="3"
      />
      <path
        d="M40 66 L58 44 M66 62 L82 38 M92 58 L106 36"
        fill="none"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M14 92 C40 84 70 84 96 90 C126 97 168 97 204 92"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
