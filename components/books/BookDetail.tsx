import axios from "axios";
import Image from "next/image";
import ReviewContainer from "../reviews/ReviewContainer";

interface componentProps {
  id: string;
  reFetch: (value: boolean) => void;
}

export default async function BookDetail({ id, reFetch }: componentProps) {
  const { data } = await axios.get<Book>(
    `https://bookreviewsapp20240204232531.azurewebsites.net/api/Book/${id}`
  );
  return (
    <div className="w-[80vw] flex flex-col mt-[100px] items-center pt-[75px] gap-[40px]">
      <h2 className="text-5xl font-bold">{data.title}</h2>
      <Image src={data.image} alt="Book_image" width={500} height={400} />
      <p className="text-center">{data.description}</p>
      <h3 className="text-2xl font-semibold">Reseñas</h3>
      <ReviewContainer id={id} reload={reFetch} />
    </div>
  );
}
