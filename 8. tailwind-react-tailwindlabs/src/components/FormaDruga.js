function FormaDruga() {
  return (
    <div
      class="
    h-screen
    bg-gray-100
    
    flex flex-col
    justify-center
    items-center
  "
    >
      <label
        htmlFor="full_name"
        className="text-gray-700 text-sm select-none font-bold"
      >
        Full Name
      </label>
      <input
        type="text"
        id="full_name"
        placeholder="Enter your full Name"
        className="mt-3 w-3/5 sm:w-1/2 md:w-2/5 xl:w-2/6  text-center focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-500 shadow border-2 rounded-lg placeholder-gray-500"
      />
      <button className="mt-4 px-4 py-2 border-2 text-blue-400 bg-blue-100 rounded-lg">
        Save
      </button>
    </div>
  );
}
export default FormaDruga;
