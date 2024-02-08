import axios from "axios";
import ReviewCard from "./ReviewCard";
import ReviewHeader from "./ReviewHeader";

interface componentProps {
  id: string;
  reload: (value: boolean) => void;
}

export default async function ReviewContainer({ id, reload }: componentProps) {
  const { data } = await axios.get<Review[]>(
    `https://bookreviewsapp20240204232531.azurewebsites.net/api/Review/book/${id}`
  );

  async function handleSubmit() {}
  return (
    <div className="flex flex-col border-[1px] border-white w-full rounded-full p-10 px-20 pb-16">
      <ReviewHeader reloader={reload} />
      {data.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
