import React from "react"

export default function Home() {
  return (
    <div>
      {/* <button className="m-8 focus:ring-2 ring-opacity-50 px-4 py-2 focus:outline-none text-blue-200 rounded-lg border-blue-600 border-l-8 bg-blue-500">
        submit
      </button>
      <button className="m-8 focus:ring-1 ring-opacity-10 ring-red-100 px-4 py-2 focus:outline-none text-red-800 rounded-lg border-2 border-red-600  ">
        submit
      </button>
      <button className="m-8 focus:ring-1 ring-opacity-10 ring-red-100 px-4 py-2 focus:outline-none text-red-800 rounded-lg border-2 border-red-600  ">
        submit
      </button>
      <p className=" ml-5 text-blue-500">Hello world!</p>
      <div>
        Hello
        <div className="bg-yellow-400 h-6 w-32 inline-block">world</div>
      </div>
      <h1 className="text-center">Flex</h1> */}
      {/* <div className="h-screen bg-blue-100 flex justify-around items-center ">
        <div className="bg-blue-500 w-16 h-16">1</div>
        <div className="bg-red-500 w-16 h-16">2</div>
        <div className="bg-indigo-500 w-16 h-16">3</div>
      </div> */}
      {/* <div className=" flex m-8 items-center  ">
        <div className="text-2xl">&bull;</div>

        <p className="text-5xl">Hello there.</p>
      </div> */}
      <div className="h-screen flex flex-wrap   ">
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-100 w-full m-2   flex justify-center items-center ">
            A
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
        <div className="flex w-1/3 h-1/3 ">
          <div className="bg-blue-300 m-2 w-full   flex justify-center items-center ">
            B
          </div>
        </div>
      </div>
    </div>
  )
}
