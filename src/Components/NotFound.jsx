

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <img
        src="/image/notfound.jpg"
        alt="404 Not Found"
        width="400"
        className="mt-3"
      />
    </div>
  );
}
