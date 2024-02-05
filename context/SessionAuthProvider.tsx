"use client";

import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const SessionAuthProvider = ({ children }: Props): JSX.Element => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionAuthProvider;
