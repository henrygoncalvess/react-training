export default function Container({ title, desc, children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        borderRadius: "20px",
        margin: "15px 0px",
      }}
    >
      <h1 style={{ margin: "2px" }}>Subject: {title}</h1>
      <h2 style={{ margin: "2px", color: "rgb(151, 151, 151)" }}>
        Talk about: {desc}
      </h2>
      <div>{children}</div>
    </div>
  );
}
