export function Button({ label, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {label}
      </button>
    </>
  );
}
