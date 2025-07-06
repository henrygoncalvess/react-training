export default function Container({ title, desc, children }) {
  const styles = {
    flex: "0 1 600px",
    border: "2px solid black",
    padding: "1rem",
    borderRadius: "10px",
    margin: "0.5rem 0.5rem",
    textAlign: "center",
    height: "max-content",
  };

  return (
    <div style={styles}>
      <h2>SUBJECT: {title}</h2>
      <h3 style={{ color: "rgb(149, 149, 149)" }}>RELATED TO: {desc}</h3>
      {children}
    </div>
  );
}
