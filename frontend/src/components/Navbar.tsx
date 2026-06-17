function Navbar() {
  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "16px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🎓 EventIQ</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <span>Dashboard</span>
        <span>Events</span>
        <span>Leaderboard</span>
        <span>AI Tools</span>
      </div>
    </nav>
  );
}

export default Navbar;