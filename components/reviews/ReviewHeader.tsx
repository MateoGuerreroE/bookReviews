"use client";

import { useSession } from "next-auth/react";
import ButtonLogin from "../books/ButtonLogin";
import { useState } from "react";

interface componentProps {
  reloader: (value: boolean) => void;
}

export default function ReviewHeader({ reloader }: componentProps) {
  const { data: session } = useSession();
  const [newReview, setNewReview] = useState({
    title: "",
    value: "",
    comment: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    value: "",
    comment: "",
  });

  return (
    <div className="flex flex-row justify-center">
      {!session ? (
        <div className="flex flex-row w-full p-5">
          <div>
            <label>Titulo</label>
            <input type="text" />
          </div>
          <div>
            <label>Valor</label>
            <input type="number" />
          </div>
          <div>
            <label>Comentario</label>
            <input type="text" />
          </div>
          <button>Enviar</button>
        </div>
      ) : (
        <div className="my-3 flex flex-col w-[300px]">
          <ButtonLogin text="" text2="Inicia sesión para poder hacer reseñas" />
        </div>
      )}
    </div>
  );
}
