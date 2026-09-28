import useVisitorPosition from "../hooks/useVisitorPosition";

function formatVisitorOrdinal(value) {
  const lastDigit = value % 10;
  if (lastDigit === 1) return `${value}st`;
  if (lastDigit === 2) return `${value}nd`;
  if (lastDigit === 3) return `${value}rd`;
  return `${value}th`;
}

export default function Footer() {
  const { position, failed } = useVisitorPosition();

  const visitorMessage = position
    ? `You're the ${formatVisitorOrdinal(position)} visitor of this website.`
    : failed
      ? "Visitor position is temporarily unavailable."
      : "Calculating your visitor position...";

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "rgba(0,245,255,0.12)",
        background: "linear-gradient(180deg, #050810, #04070f)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p
          className="text-xl sm:text-2xl leading-relaxed"
          style={{
            color: "#e2e8f0",
            fontFamily: "'Space Grotesk', sans-serif",
            textWrap: "balance",
          }}
        >
          "Great products are built when curiosity meets consistency."
        </p>

        <div
          className="mx-auto mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{
            borderColor: "rgba(0,245,255,0.28)",
            background: "rgba(0,245,255,0.08)",
            color: "#67e8f9",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#22d3ee",
              boxShadow: "0 0 10px rgba(34,211,238,0.8)",
            }}
          />
          {visitorMessage}
        </div>
      </div>
    </footer>
  );
}
