import { BsStarFill } from "react-icons/bs";

export function Reviews() {
  return (
    <section className="flex h-full grow flex-col overflow-x-hidden bg-gradient-to-b from-yellow-50 to-orange-200 drop-shadow-lg sm:flex-row md:max-h-[512px] lg:h-[50vh] lg:max-h-screen">
      <div className="flex flex-col justify-center p-10">
        <div className="mx-auto flex w-[50%] justify-evenly py-4 text-3xl text-amber-700 ">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <p className="text-center font-bold text-amber-500">
          ❝Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quidem
          delectus, saepe iusto natus velit molestias porro beatae voluptate
          dolorem ratione nemo in corrupti sit cupiditate mollitia voluptatem
          voluptas id❞
        </p>
        <p className="p-3 text-end font-bold text-amber-700">-Pepe Roni</p>
      </div>
      <div className="flex flex-col justify-center p-10">
        <div className="mx-auto flex w-[50%] justify-evenly py-4 text-3xl text-amber-700 ">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <p className="text-center font-bold text-amber-500">
          ❝Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quidem
          delectus, saepe iusto natus velit molestias porro beatae voluptate
          dolorem ratione nemo in corrupti sit cupiditate mollitia voluptatem
          voluptas id❞
        </p>
        <p className="p-3 text-end font-bold text-amber-700">-Anton Ego</p>
      </div>
      <div className="flex flex-col justify-center p-10">
        <div className="mx-auto flex w-[50%] justify-evenly py-4 text-3xl text-amber-700 ">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <p className="text-center font-bold text-amber-500">
          ❝Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quidem
          delectus, saepe iusto natus velit molestias porro beatae voluptate
          dolorem ratione nemo in corrupti sit cupiditate mollitia voluptatem
          voluptas id❞
        </p>
        <p className="p-3 text-end font-bold text-amber-700">-Alex Di Capo</p>
      </div>
    </section>
  );
}
