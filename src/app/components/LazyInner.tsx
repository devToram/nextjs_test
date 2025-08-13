export default function LazyInner() {
  console.log("[LazyInner] rendered in browser");
  return (
    <div style={{ border: "1px dashed blue", padding: "5px" }}>
      <strong>Lazy-loaded Inner Component!</strong>
    </div>
  );
}
