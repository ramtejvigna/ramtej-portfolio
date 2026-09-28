export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 ${className}`}>
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
