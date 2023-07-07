export function Hero() {
  return (
    <header className="flex h-[100vh] grow bg-[url('/ice-cream.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full flex-row-reverse overflow-x-hidden">
        <div className="my-auto flex w-[60%] flex-col items-center justify-center bg-transparent sm:w-[50%]">
          <h1 className="animate-fade p-4 text-center font-sans text-2xl font-bold text-orange-200 animate-delay-200 animate-duration-1000 animate-once lg:text-6xl">
          Eat it before it melts.
          </h1>
          <div className="h-[2px] w-[85%] animate-fade bg-orange-600 animate-delay-200 animate-duration-1000"></div>
          <p className="animate-fade-up py-2 text-center text-base text-orange-200 duration-1000 animate-delay-200 lg:text-xl lg:font-bold">
          No one can resist its delicious taste. Come and make your life sweeter with us!
          </p>
          <button
            type="button"
            onClick={() => (window.location.href = "#contact")}
            className="mb-20 mt-4 animate-fade-up bg-amber-700 px-4 py-2 font-bold text-orange-200 transition-all duration-300 ease-in animate-delay-200 animate-duration-1000 hover:relative hover:bottom-1 hover:cursor-pointer hover:bg-orange-200 hover:text-amber-700 sm:mb-6 lg:mt-10 lg:text-2xl"
          >
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
}
