import { montserrat } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <section className="flex flex-col-reverse h-[800px] justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${montserrat.className} antialiased text-4xl md:text-9xl`}>404</h2>
        <p className="text-semibold text-xs md:text-xl">Ooops!, sorry we can&apos;t find that page</p>
        <p className="font-light text-xs md:text-xl">
          <span>Back to </span>
          <Link className="font-normal hover:underline transition-all" href="/">Home page</Link>
        </p>
      </div>

      <picture className="mx-5 px-5">
        <Image className="p-5 sm:p-0" src="/imgs/starman_750x750.png" alt="404" width={550} height={550} />
      </picture>
    </section>
  );
}

export default NotFound;