function Locals() {
  return (
    <>
    <header className="flex h-[30vh] grow bg-[url('/sweets.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full overflow-x-hidden">
        <div className="my-auto flex w-full flex-col items-center justify-center bg-transparent">
          <h1 className="animate-fade p-4 text-center font-sans text-2xl font-bold text-orange-200 animate-delay-200 animate-duration-1000 animate-once lg:text-6xl">
          Locals
          </h1>
        </div>
      </div>
    </header>
    <section id='miami' className="flex grow flex-col bg-gradient-to-b from-yellow-50 to-orange-200 drop-shadow-lg sm:flex-row lg:h-[50vh]">
      <div className="flex w-full flex-col items-center justify-center p-2 sm:flex-row lg:w-[60%] lg:flex-col">
          <div className='p-4'>
          <h1 className="mx-10 mt-10 bg-orange-200 py-2 text-center text-xl font-bold text-orange-700 sm:mt-0 md:text-4xl lg:mx-52">Miami</h1>
          <p className="pt-4 text-center text-base font-bold text-orange-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            dolores, beatae ipsum rerum at sint iusto sequi totam illum quisquam
            corporis laudantium voluptatibus tempora autem, quam iure laborum ea
            odio.

            A.V 237 street, Miami, Florida.
          </p>
          </div>
        </div>
        <div className="flex h-60 w-full grow bg-[url('/local-miami.jpg')] bg-cover bg-center sm:h-96 lg:h-full lg:w-[40%]">
        </div>
      </section>
      <section id='losangeles' className="mt-2 flex grow flex-col bg-gradient-to-b from-yellow-50 to-orange-200 drop-shadow-lg sm:flex-row-reverse lg:h-[50vh]">
      <div className="flex w-full flex-col items-center justify-center p-2 sm:flex-row lg:w-[60%] lg:flex-col">
          <div className='p-4'>
          <h1 className="mx-10 mt-10 bg-orange-200 py-2 text-center text-xl font-bold text-orange-700 sm:mt-0 md:text-4xl lg:mx-52">Los Angeles</h1>
          <p className="pt-4 text-center text-base font-bold text-orange-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            dolores, beatae ipsum rerum at sint iusto sequi totam illum quisquam
            corporis laudantium voluptatibus tempora autem, quam iure laborum ea
            odio.

            12th WC Main street, Los Angeles, California.
          </p>
          </div>
        </div>
        <div className="flex h-60 w-full grow bg-[url('/local-losAngeles.jpg')] bg-cover bg-center sm:h-96 lg:h-full lg:w-[40%]">
        </div>
      </section>
  </>
  )
}

export default Locals