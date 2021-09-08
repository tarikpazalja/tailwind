function CardEmployee() {
  return (
    <div
      class="
      h-screen
      bg-gray-600
      
      flex flex-col
      justify-center
      items-center
    "
    >
      <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="bg-gray-200 text-lg text-gray-700 px-6 py-4">
          The title of the Card
        </div>
        <div className="flex justify-between px-6 py-4">
          <div className="uppercase bg-yellow-700 font-xs px-2 py-1 text-gray-300 border border-gray-200 font-bold rounded-full">Under Review</div>
          <div>23,05/1983</div>
        </div>
        <div>
          <div>Here is a short comment about this employee</div>
        </div>
        <div className="bg-gray-200">
          <div>Employee</div>
          <div>
            <div>VG</div>
            <div>
              <p>Victor Gonzales</p>
              <p>Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardEmployee;
