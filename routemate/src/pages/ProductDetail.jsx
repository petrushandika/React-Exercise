import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <main>
      <div className="comoponent">ProductDetail - {params.id}</div>
    </main>
  );
}
