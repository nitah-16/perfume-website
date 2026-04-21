function PerfumeCard({ perfume }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img src={perfume.image_url} alt={perfume.name} width="150" />
      <h3>{perfume.name}</h3>
      <p>{perfume.description}</p>
      <p>${perfume.price}</p>
    </div>
  );
}

export default PerfumeCard;