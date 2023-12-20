/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3mCX47dNLWs
 */
export default function Component() {
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-semibold">Image One</h2>
        </div>
        <div className="card-content">
          <img
            alt="Image One"
            className="w-full object-cover h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <p className="mt-2 text-sm text-gray-500">
            This is the description for Image One.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-semibold">Image Two</h2>
        </div>
        <div className="card-content">
          <img
            alt="Image Two"
            className="w-full object-cover h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <p className="mt-2 text-sm text-gray-500">
            This is the description for Image Two.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-semibold">Image Three</h2>
        </div>
        <div className="card-content">
          <img
            alt="Image Three"
            className="w-full object-cover h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <p className="mt-2 text-sm text-gray-500">
            This is the description for Image Three.
          </p>
        </div>
      </div>
    </main>
  );
}
