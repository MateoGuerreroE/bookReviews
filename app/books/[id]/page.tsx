"use client";

import BookDetail from "@/components/books/BookDetail";
import { Suspense, useState } from "react";

export default function BookInfo({ params }: { params: { id: string } }) {
  const [fecth, reFetch] = useState(false);
  return (
    <div className="min-h-screen min-w-screen flex justify-center">
      <Suspense>
        <BookDetail id={params.id} reFetch={reFetch} />
      </Suspense>
    </div>
  );
}
