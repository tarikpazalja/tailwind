import React from "react"
import "./index.css"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    {/* outlined and shadow buttons */}
    <div className="p-32 bg-blue-800 flex justify-center space-x-6">
      <Link
        to="/prvastrana"
        className="bg-red-600 hover:bg-red-900 transition duration-150 py-3 px-8 rounded text-red-100 "
      >
        Prva Strana
      </Link>
      <Link
        to="/prvastrana"
        className="bg-red-600 hover:bg-red-900 transition duration-150 py-3 px-8 rounded text-red-100 "
      >
        prva strana
      </Link>
      <Link className="flex">
        <a
          className="bg-orange-600 hover:bg-orange-800 py-3 px-12 rounded-full text-orange-100 transition duration-500"
          href="#"
        >
          Login
        </a>
      </Link>
      <a
        className="bg-yellow-500 
        hover:bg-yellow-600 
        py-3 px-6 rounded-lg
         text-yellow-100 
         border-b-4 border-yellow-800
          hover:border-yellow-900 transition duration-300"
        href="#"
      >
        Sign up
      </a>
    </div>

    <div
      className="p-32 space-x-8 bg-teal-200 
    text-xl flex justify-center"
    >
      <a
        href="#"
        className="py-4 px-8 text-teal-800 
        hover:text-teal-600 transition duration-500
         font-bold hover:border-teal-600 rounded border border-teal-800"
      >
        do it{" "}
      </a>
      <a href="#" className="bg-teal-100 rounded-full py-3 px-8 shadow">
        Dont Do It
      </a>
    </div>

    <div className="p-32 bg-purple-800 flex justify-center">
      <a href="#">Learn</a>
      <a href="#">Login</a>
      <a href="#">Sign up</a>
    </div>
    {/* <div className="p-20 bg-blue-400">
      <h2 className="mb-4">box properties</h2>
      <div className="p-10 shadow-2xl border bg-blue-200 rounded-lg border-blue-500">
        {" "}
        i am a box
      </div>
    </div> */}
    {/* <div className="p-20 bg-orange-300">
      <button className="p-4 bg-green-400 rounded">click me</button>
      <button className="p-4 bg-green-400 rounded">click me</button>
      <button className="p-4 bg-green-400 rounded">click me</button>
      <button className="p-4 bg-green-400 rounded">click me</button>
      <button className="p-4 bg-green-400 rounded">click me</button>
    </div> */}
    {/* <div class="p-20 text-large text-gray-800 leading-relaxed ">
      <h2 class="mb-4 tracking-wide font-bold text-4xl text-gray-700">
        learning tail2wind is fun
      </h2>
      <h3 class="mb-8 text-2xl text-gray-500">more fun than i expected</h3>
      <p class="mb-10 ">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <p class="mb-10">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
    </div> */}
    {/* <div class="p-20 bg-gray-800">
      <div class="p-4 rounded-lg bg-red-100">i am a box</div>
      <div class="p-4 rounded-lg bg-red-200">i am a box</div>
      <div class="p-4 rounded-lg bg-red-300">i am a box</div>
      <div class="p-4 rounded-lg bg-red-400">i am a box</div>
      <div class="p-4 rounded-lg bg-red-500">i am a box</div>
      <div class="p-4 rounded-lg bg-red-600">i am a box</div>
      <div class="p-4 rounded-lg bg-red-700">i am a box</div>
      <div class="p-4 rounded-lg bg-red-800">i am a box</div>
      <div class="p-4 rounded-lg bg-red-900">i am a box</div>
      <div class="p-4 rounded-lg bg-blue-500">i am a box</div>
    </div> */}
  </>
)

export default IndexPage
