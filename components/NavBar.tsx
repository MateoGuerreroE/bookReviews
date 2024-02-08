import Link from "next/link";
import ButtonLogin from "./books/ButtonLogin";
import ProfileMiniature from "./ProfileMiniature";

export default function NavBar() {
  return (
    <div className="flex flex-row h-[100px] w-full bg-neutral-950 fixed top-0 justify-evenly">
      <h3 className="text-4xl font-medium self-center">Book Reviews app</h3>
      <div className="flex flex-row gap-[100px] text-lg self-center">
        <Link
          href="/"
          className="p-3 px-5 rounded-full hover:text-gray-300 hover:bg-neutral-700"
        >
          Home
        </Link>
        <Link
          href="/books"
          className="p-3 px-5 rounded-full hover:text-gray-300 hover:bg-neutral-700"
        >
          Books
        </Link>
        <Link
          href="/about"
          className="p-3 px-5 rounded-full hover:text-gray-300 hover:bg-neutral-700"
        >
          About
        </Link>
      </div>
      <div className="flex self-center mx-5 gap-10">
        <ProfileMiniature />
        <ButtonLogin text="Cierra sesión" text2="Inicia sesión" />
      </div>
    </div>
  );
}
