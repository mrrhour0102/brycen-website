export default function SplitSection({ left, right, reverse = false }) {
  return (
    <div
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>{left}</div>

      <div>{right}</div>
    </div>
  );
}
