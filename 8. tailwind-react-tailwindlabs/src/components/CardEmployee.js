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
        <div>
          <div>Under Review</div>
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
