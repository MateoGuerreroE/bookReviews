import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full h-[80vh] flex flex-col justify-center">
        <div className="flex flex-row gap-20 justify-evenly">
          <div>
            <Image
              width={550}
              height={550}
              src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f680.svg"
              alt="main_image"
            />
          </div>
          <div className="w-[600px] flex flex-col gap-10 justify-center">
            <h1 className="text-6xl font-semibold">
              This is a Controlbox assessment for a developer position.
            </h1>
            <p className="text-lg">
              On here you will be able to check on some books, read previous
              reviews and even create your own. Consider logging in for a better
              experience, you will be able to change information on your profile
              whenever you want.
            </p>
            <p className="text-lg">
              Want to check the code? Go to the{" "}
              <Link href="/about" className="text-blue-500 hover:text-white">
                About
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
