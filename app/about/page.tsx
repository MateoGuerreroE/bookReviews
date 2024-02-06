import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col p-24">
      <div className="flex flex-row h-[80vh] p-10 gap-10">
        <div className="flex flex-col justify-center gap-10 w-[50%]">
          <h2 className="text-5xl font-bold mt-10">How was this site built?</h2>
          <div>
            <label className="text-xl font-semibold">Front-End: </label>
            <ul className="list-disc pl-10 pt-3 pb-8">
              <li className="text-lg">Node/Next.js</li>
              <li className="text-lg">TypeScript</li>
              <li className="text-lg">NextAuth</li>
              <li className="text-lg">TailwindCSS</li>
              <li className="text-lg">Vitest</li>
              <li className="text-lg">Vercel Deployment</li>
            </ul>
            <label className="text-xl font-semibold">Back-End: </label>
            <ul className="list-disc pl-10 pt-3">
              <li className="text-lg">C# ASP .NET Web Api</li>
              <li className="text-lg">PostgreSQL</li>
              <li className="text-lg">AWS DB Hosting</li>
              <li className="text-lg">Azure Deployment</li>
            </ul>
          </div>
          <h2 className="text-5xl font-bold mt-10">What was the hardest?</h2>
          <p className="text-lg">
            I would say C# server was the hardest because for any minor issue,
            documentation can vary a LOT between a year and another, a lot of
            deprecated methods, and a hard time integrating passwordHashing and
            trying to integrate too JWT (which was reversed for a Next.js bug
            then decoding), complicated things and made the project creation a
            little longer than what It should have been.
          </p>
        </div>
        <div className="flex flex-col w-[50%] gap-10 justify-center">
          <div className="flex flex-col text-center items-center gap-5">
            <h2 className="text-4xl font-bold">Created by: </h2>
            <Image
              className="rounded-full"
              width={200}
              height={200}
              src="https://avatars.githubusercontent.com/u/140415694?s=400&u=b4534c60a4bc36e991e6c63d091892b04f233d79&v=4"
              alt="profile_photo"
            />
            <h4>Mateo Guerrero</h4>
            <a
              href="https://github.com/MateoGuerreroE"
              type="button"
              className="text-white bg-[#24292F] hover:cursor-pointer hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              Checkout my github!
            </a>
          </div>
          <h2 className="text-center text-2xl font-semibold">Project repos:</h2>
          <div className="flex items-center justify-evenly">
            <a
              href="https://github.com/MateoGuerreroE/bookReviews"
              className="w-72 bg-slate-900 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200"
            >
              <div className="flex flex-row">
                <Image
                  width={40}
                  height={40}
                  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                  alt="image"
                  className="rounded"
                />
                <p className="ml-3">
                  <span className="text-gray-500 font-semibold">Repo/</span>
                  <span className="text-gray-300 font-semibold">
                    bookReviews
                  </span>
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Client-side project created with TS + Next.js and using Github
                Actions + Vercel integrated CI/CD
              </p>
            </a>
            <a
              href="https://github.com/MateoGuerreroE/bookReviews-server"
              className="w-72 bg-slate-900 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200"
            >
              <div className="flex flex-row">
                <Image
                  width={40}
                  height={40}
                  src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                  alt="image"
                  className="rounded"
                />
                <p className="ml-3">
                  <span className="text-gray-500 font-semibold">Repo/</span>
                  <span className="text-gray-300 font-semibold">
                    bookReviews-server
                  </span>
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Built in C# with PostgreSQL using VisualCode and Azure for
                hosting. PostgreSQL database is hosted in AWS
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
