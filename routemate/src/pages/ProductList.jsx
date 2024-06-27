import { useLocation, useSearchParams } from "react-router-dom";

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(searchParams.get("keyword"));
  console.log(location);

  return (
    <main>
      <div className="component">ProductList</div>
    </main>
  );
}
