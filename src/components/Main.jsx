import { Link } from "react-router-dom"
export function Main() {
  return (
      <section className="flex h-[100vh] shrink grow flex-col bg-gradient-to-b from-yellow-50 to-orange-200 drop-shadow-lg sm:flex-row md:max-h-[512px] lg:h-screen lg:max-h-screen">
        <div className="flex w-full flex-col items-center justify-center p-10 md:w-[60%]">
            <h1 className={`rounded-[-10]  bg-orange-200 p-2 text-center text-xl  font-bold text-orange-700 md:text-4xl
            `}>10+ YEARS BRINGING JOY</h1>
          <p className="pt-4 text-center text-base font-bold text-orange-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            dolores, beatae ipsum rerum at sint iusto sequi totam illum quisquam
            corporis laudantium voluptatibus tempora autem, quam iure laborum ea
            odio.
          </p>
          <div className="pt-6">
            <Link to="/about" className="bg-orange-700 p-2 text-xl font-bold text-orange-200 transition-colors duration-500 hover:cursor-pointer hover:bg-orange-300 hover:text-orange-700">Read more</Link>
          </div>
        </div>
        <div className="flex h-full w-full grow md:w-[40%]">
          <img src="/cream.jpg" className="h-full w-full object-cover"/>
        </div>
      </section>
  );
}
