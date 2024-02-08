import axios from "axios";
import BookCard from "./BookCard";
import { Suspense } from "react";

export default async function BookContainer() {
  const { data } = await axios.get(
    "https://bookreviewsapp20240204232531.azurewebsites.net/api/Book"
  );
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((book: any, idx: number) => (
        <BookCard key={idx} book={book} />
      ))}
    </div>
  );
}
