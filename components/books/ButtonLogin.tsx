"use client";

import { signIn, signOut, useSession } from "next-auth/react";

interface componentProps {
  text: string;
  text2?: string;
}

export default function ButtonLogin({ text, text2 }: componentProps) {
  const { data: session, status } = useSession();
  const handleClick = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {status === "loading" ? "..." : session ? `${text}` : `${text2}`}
    </button>
  );
}
