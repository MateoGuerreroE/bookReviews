import BookContainer from "@/components/books/BookContainer";
import { Suspense } from "react";

export default function Books() {
  return (
    <div className="flex flex-col p-16 mt-[100px] gap-10">
      <div className="text-center">
        <h2 className="text-5xl self-center font-semibold mb-5">
          Todos los libros
        </h2>
        <p className="mb-14">
          Haz click en la imágen para ver toda la información del libro
        </p>
        <Suspense>
          <BookContainer />
        </Suspense>
      </div>
    </div>
  );
}
