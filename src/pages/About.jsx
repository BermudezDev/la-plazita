import {Reviews} from '../components'
function About() {
  return (
    <>
    <header className="flex h-[30vh] grow bg-[url('/sweets.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full overflow-x-hidden">
        <div className="my-auto flex w-full flex-col items-center justify-center bg-transparent">
          <h1 className="animate-fade p-4 text-center font-sans text-2xl font-bold text-orange-200 animate-delay-200 animate-duration-1000 animate-once lg:text-6xl">
          ABOUT US
          </h1>
        </div>
      </div>
    </header>
    <section className="flex grow flex-col bg-gradient-to-b from-yellow-50 to-orange-200 drop-shadow-lg lg:h-[700px] lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center p-10 sm:flex-row lg:w-[60%] lg:flex-col">
          <div className='p-4'>
          <h1 className="mx-10 mt-10 bg-orange-200 py-2 text-center text-xl font-bold text-orange-700 sm:mt-0 md:text-4xl lg:mx-52">Our History</h1>
          <p className="pt-4 text-center text-base font-bold text-orange-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            dolores, beatae ipsum rerum at sint iusto sequi totam illum quisquam
            corporis laudantium voluptatibus tempora autem, quam iure laborum ea
            odio.
          </p>
          </div>
          
          <div className='p-4'>
          <h1 className="mx-10 mt-10 bg-orange-200 py-2 text-center text-xl font-bold text-orange-700 sm:mt-0 md:text-4xl lg:mx-52">Our Mission</h1>
          <p className="mb-8 pt-4 text-center text-base font-bold text-orange-300 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            dolores, beatae ipsum rerum at sint iusto sequi totam illum quisquam
            corporis laudantium voluptatibus tempora autem, quam iure laborum ea
            odio.
          </p>
          </div>
          
        </div>
        <div className="flex h-60 w-full grow bg-[url('/waffle.jpg')] bg-cover bg-center sm:h-96 lg:h-full lg:w-[40%]">
        </div>
      </section>
      <Reviews />
  </>
  )
}

export default About