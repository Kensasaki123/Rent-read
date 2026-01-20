import { useParams } from "react-router-dom";

function Productshowcase() {
  const { id } = useParams(); // "42"

  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
}

export default Productshowcase;
