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
        <div className="flex justify-between items-center px-6 py-4">
          <div className="uppercase bg-yellow-700 font-xs px-2 py-1 text-gray-300 border border-gray-200 font-bold rounded-full">
            Under Review
          </div>
          <div className="text-sm">23,05/1983</div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="border rounded-lg p-4 bg-gray-200">
            Here is a short comment about this employee
          </div>
        </div>
        <div className="bg-gray-200 px-6 py-4">
          <div className="uppercase text-xs text-gray-600 font-bold">
            Employee
          </div>
          <div className="flex items-center pt-3">
            <div className="bg-blue-700 w-12 h-12 rounded-full flex justify-center items-center text-white font-bold uppercase">
              VG
            </div>
            <div className="ml-4">
              <p className="font-bold">Victor Gonzales</p>
              <p className="text-sm text-gray-700 mt-1 ">Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardEmployee;
