import { forwardRef } from "react";
import Link from "next/link";

const Sidebar = forwardRef<HTMLInputElement, any>(function Sidebar(
  { isOpen }: { isOpen: boolean },
  ref
) {
  return (
    <div
      className={
        "fixed top-0 right-0 m-0 p-0 bg-black z-10 h-full w-[40%] xl:w-1/4 lg:w-1/3 duration-700 ease-out " +
        (isOpen ? "translate-x-0" : "translate-x-full opacity-0")
      }
      ref={ref}
    >
      <div className="mt-16 w-full flex flex-col justify-center items-center">
        <ul className="flex flex-col justify-center">
          <li className="mb-8">
            <Link
              href="#"
              className="text-sm text-white hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
          </li>

          <li className="mb-8">
            <Link
              href="#"
              className="text-sm text-white hover:underline hover:underline-offset-4"
            >
              Rent
            </Link>
          </li>
          <li className="mb-8">
            <Link
              href="#"
              className="text-sm text-white hover:underline hover:underline-offset-4"
            >
              Sell
            </Link>
          </li>
          <li className="mb-8">
            <Link
              href="#"
              className="text-sm text-white hover:underline hover:underline-offset-4"
            >
              About
            </Link>
          </li>
          <li className="mb-8">
            <Link
              href="#"
              className="text-sm text-white hover:underline hover:underline-offset-4 font-medium"
            >
              Sign In
            </Link>
          </li>
          <li className="mb-8">
            <Link
              href="#"
              className="px-4 rounded-3xl py-2 border-[1px] border-black bg-white text-sm text-black hover:bg-black hover:text-white hover:border-white"
            >
              Create Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
