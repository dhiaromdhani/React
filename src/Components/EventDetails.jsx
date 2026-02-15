import { useParams } from "react-router-dom";

export default function EventDetails() {
  const { name } = useParams();

  return (
    <div className="container mt-4">
      <h2>Event Details</h2>
      <p>Event Name: {name}</p>
    </div>
  );
}
