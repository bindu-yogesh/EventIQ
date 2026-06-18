function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          🎓 EventIQ
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "12px",
            opacity: 0.8,
          }}
        >
          Smart Campus Event Management
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        <span style={{ cursor: "pointer" }}>
          📊 Dashboard
        </span>

        <span style={{ cursor: "pointer" }}>
          📅 Events
        </span>

        <span style={{ cursor: "pointer" }}>
          🏆 Leaderboard
        </span>

        <span style={{ cursor: "pointer" }}>
          🤖 AI
        </span>
      </div>
    </nav>
  );
}

export default Navbar;