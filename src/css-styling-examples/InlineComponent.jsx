export default function InlineComponent() {
  const header = {
    color: "yellowgreen",
    background: "wheat",
    fontSize: "30px",
  };
  return (
    <div>
      <h2 style={{ color: "darkgreen", background: "grey", fontSize: "25px" }}>
        Inline styling can be done directly this way or like in the example
        below....{" "}
      </h2>

      {/* OR  */}

      <h2 style={header}>
        Inline Component Styling: this is the alternate option,through
        "const"...then call it from h2 tag...
      </h2>
    </div>
  );
}
