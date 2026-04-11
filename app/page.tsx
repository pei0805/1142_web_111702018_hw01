import Image from "next/image";
import Link from "next/link";
import Menu from "../component/Menu";
import { FaHome } from "react-icons/fa";
import ShinyText from "@/components/ShinyText";



export default function Home() {
  return (
    <>
      <div className="flex h-full w-full">


        <Link href="/" className=" sm:hidden bg-[#7181c8] p-3 rounded-full inline-flex items-center justify-center fixed top-12 left-12 z-9999">
          <FaHome className="text-white text-xl" />
        </Link>
        <div>

          <Menu />
        </div>

        <div className="w-full sm:block hidden">
          <div className="relative flex flex-col items-center justify-center min-h-screen text-center space-y-2 overflow-hidden">

            <img
              src="/sea.jpg"
              className="absolute inset-0 w-full h-full rounded-2xl object-cover opacity-40 scale-88"
            />


            <ShinyText
              text="·ฺ.∗̥ Welcome to my portfolio ·ฺ.∗̥"
              className="text-4xl font-bold z-10"
              speed={2}
              delay={0}
              color="#2a3254"
              shineColor="#b7d3f4"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
