"use client";

import { useSession } from "next-auth/react";
import profileIcon from "../public/free_icon_1.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileMiniature() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      {session ? (
        <div className="w-[50px]">
          <Image
            src={profileIcon}
            alt="profileIcon"
            className="hover:cursor-pointer"
            onClick={() => router.push("/profile")}
          />
        </div>
      ) : null}
    </>
  );
}
