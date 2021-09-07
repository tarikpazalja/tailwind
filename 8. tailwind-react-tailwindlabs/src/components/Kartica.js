import image from "../img/logo2.png";
import slika from "../img/slika.jpg";

function Kartica() {
  return (
    <div className=" px-8 py-12 max-w-md mx-auto">
      <img className="h-16" src={image} alt="fdfsdfdsfds"></img>
      <img className="mt-6 rounded-lg" src={slika} alt="fdfsdfddfdgfgf"></img>
      <h1 className="mt-4 text-3xl text-gray-700 font-bold ">
        Mozes raditi gdje god zelis.
        <span className="text-green-400 ml-2">Iskoristi to.</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Ovo ti omogucava da radis na lokaciji kojoj ti zelis, nisi vezan za
        odredjeno mjesto rada
      </p>
      <div className="mt-6">
        <a
          href="#"
          className="inline-block text-white bg-indigo-500 rounded-lg uppercase tracking-wider  font-semibold shadow-lg px-5 py-3"
        >
          Book your escape
        </a>
      </div>
    </div>
  );
}
export default Kartica;
