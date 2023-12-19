/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CWv5lsfj4By
 */
function upload() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f5f5f5] min-h-screen">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-4">File Upload</h2>
        <div className="flex flex-col items-center">
          <label
            className="w-64 flex flex-col items-center px-4 py-6 bg-[#f5f5f5] text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
            htmlFor="file-upload"
          >
            <CloudIcon className="w-8 h-8" />
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input className="hidden" id="file-upload" type="file" />
          </label>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export default upload;
