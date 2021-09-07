function Forma() {
    return (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12">
  <div class=" ">
    <span class="text-2xl antialiased font-light">Login to your account</span>
    <div class="bg-white mt-5 rounded-md">
      <div class="bg-indigo-500 h-2 mt rounded-t-md"></div>
      <div class="px-8 py-6">
        <label for="" class="block">Username</label>
        <input placeholder="Email" type="text" class="border w-full rounded-md h-8 mt-2 px-3 hover:outline-none focus:outline-none focus:ring focus:ring-indigo-800" />
        <label for="" class="block mt-2">Password</label>
        <input placeholder="Password" type="text" class="border w-full rounded-md h-8 mt-2 px-3 hover:outline-none focus:outline-none focus:ring focus:ring-indigo-800" />
        <div class="flex justify-between items-baseline">
          <button class="bg-indigo-400 mt-4 px-4 py-2  text-sm">Submit</button>
          <a href class="hover:underline  ">forgot password</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Forma;