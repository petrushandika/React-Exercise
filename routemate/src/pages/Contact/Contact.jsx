import { Outlet, useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <div className="component">Contact</div>
      <Outlet/>
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  );
}
