import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Contact() {
  return (
    <div id="contact" className="flex flex-col bg-[url('/bowl.jpg')] bg-cover bg-center py-12 drop-shadow-xl md:flex-row lg:h-screen">
      <div className="hidden h-full w-full flex-col justify-start px-6 md:flex md:w-[30%]">
        <div className="flex flex-col">
          <h1 className="w-auto border-b border-amber-700 text-lg font-bold text-orange-700 md:text-4xl">
            Relevant Information
          </h1>
          <h4 className="text-lg font-bold text-amber-600 md:pt-4 md:text-xl">
            Schedules
          </h4>
          <p className="text-base font-bold text-orange-300 md:pt-4 md:text-lg">
            Monday to Friday 8:00AM - 5:00PM
          </p>
          <p className="text-base font-bold text-orange-300 md:pt-4 md:text-lg">
            Saturday/Sunday 9:00AM - 3:00PM
          </p>
          <h4 className="text-xl font-bold text-amber-600 md:pt-4 md:text-lg">
            Address
          </h4>
          <p className="text-base font-bold text-orange-300 md:pt-4 md:text-lg">
            A.V 237 street, Miami, Florida.
          </p>
          <h4 className="text-xl font-bold text-amber-600 md:pt-4 md:text-lg">
            Social media
          </h4>
          <p className="flex items-center pt-4 text-base font-bold text-orange-300 md:text-lg">
            <BsInstagram className="mx-1"/>LaPlazitaIG
          </p>
          <p className="flex items-center pt-4 text-base font-bold text-orange-300 md:text-lg">
            <BsFacebook className="mx-1"/>LaPlazitaOF
          </p>
          <p className="flex items-center pt-4 text-base font-bold text-orange-300 md:text-lg">
            <BsTwitter className="mx-1"/>LaPlazitaTW
          </p>
        </div>
      </div>
      <div className="flex h-full w-full justify-center px-2 md:w-[70%] md:justify-end">
        <div className="flex bg-amber-800/60 p-4 lg:w-[40%]">
          <form className="w-full">
            <div className="mb-5 w-full">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-orange-200"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-orange-200"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-orange-200"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-orange-200"
              >
                Message
              </label>
              <textarea
                rows="3"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
              <button type="submit" className="my-2 px-1 font-bold text-orange-200 underline transition-colors duration-300 hover:cursor-pointer hover:text-orange-400 lg:text-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
