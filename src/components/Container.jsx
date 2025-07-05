export default function Container({ title, desc, children }) {
  return (
    <div className="container">
      <h2>SUBJECT: {title}</h2>
      <h3>RELATED TO: {desc}</h3>
      {children}
    </div>
  );
}
