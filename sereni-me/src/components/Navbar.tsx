"use client";
import Link from "next/link";
import ThemeChanger from "@/components/Darkswitch";
import Image from "next/image";

const Navbar = () => {
  const navigation = ["Sleep", "Stress", "Anxiety", "Mindfullness", "Blog"];

  return (
    <div className="w-auto mx-[10rem]">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        <div>
          <Link href="/">
            <Image
              src="/serenimelogo2.png"
              width={160}
              height={160}
              className="brightness-[100] dark:brightness-100"
              alt="serenime Logo"
            ></Image>
          </Link>
        </div>
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block hover:scale-110 transition ease-in-out duration-300 px-4 py-2 text-lg font-normal text-white no-underline rounded-md dark:text-gray-200 hover:text-[#f2e3eb] dark:hover:text-[##f0d8d0] focus:text-[#5E7A8B] focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/main"
            className="px-6 py-2 text-white hover:text-[#f2e3eb] bg-[#8d7dce] hover:bg-opacity-40 hover:border border-[#8d7dce] rounded-md md:ml-5 hover:scale-105 transition ease-in-out
              dark:bg-[#412e33] dark:hover:bg-opacity-40 dark:hover:border dark:border-[#412e33]"
          >
            Continue to App
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
