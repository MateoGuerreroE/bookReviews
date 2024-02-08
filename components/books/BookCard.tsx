import Image from "next/image";
import Link from "next/link";

interface componentProps {
  book: Book;
}

export default function BookCard({ book }: componentProps) {
  return (
    <div className="text-center flex flex-row justify-center p-5 mt-5">
      <div className="flex flex-col items-center">
        <Link href={`/books/${book.id}`}>
          <Image
            src={book.image}
            alt={book.title}
            width={250}
            height={400}
            className="mb-[20px] hover:cursor-pointer"
          />
        </Link>
        <h3 className="font-semibold text-lg mb-2">{book.title}</h3>
        <p className="font-thin">{book.description.slice(0, 55)}...</p>
      </div>
    </div>
  );
}
