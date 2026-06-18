type Props = {
  title: string;
  value: number | string;
};

function StatCard({ title, value }: Props) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "240px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default StatCard;
