"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import nullProfile from "../../public/empty-profile.png";
import { ChangeEvent, useEffect, useState } from "react";
import { validateErrors } from "@/helpers/validations";
import axios from "axios";
import Swal from "sweetalert2";

export default function Profile() {
  const { data: session, update } = useSession();
  const image = session?.user.photo || nullProfile;
  const [info, setInfo] = useState<Partial<User>>({
    firstName: "",
    lastName: "",
    photo: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<User>>({
    firstName: "",
    lastName: "",
    photo: "",
    email: "",
  });

  useEffect(() => {
    setInfo({
      firstName: session?.user.firstName || "",
      lastName: session?.user.lastName || "",
      email: session?.user.email || "",
      photo: session?.user.photo || "",
    });
  }, [session]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    setErrors(validateErrors({ ...info, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (errors.firstName || errors.lastName || errors.email || errors.photo) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay errores en el formulario",
        color: "#FFFFFF",
        background: "#0C0C0C",
      });
    } else {
      try {
        await axios.put<boolean>(
          "https://bookreviewsapp20240204232531.azurewebsites.net/api/User",
          { ...info, id: session?.user.id }
        );
        await update(info);
        Swal.fire({
          icon: "success",
          title: "Guardado",
          text: "Cambios guardados con exito",
          color: "#FFFFFF",
          background: "#0C0C0C",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un problema al guardar la información",
          color: "#FFFFFF",
          background: "#0C0C0C",
        });
      }
    }
  };

  const handlePasswordChange = async () => {};

  return (
    <div className="flex flex-col h-[100vh] justify-center">
      <div className="flex flex-row justify-center gap-20">
        <div className="w-[300px] h-[300px]">
          <Image
            src={image}
            width={300}
            height={300}
            alt="profile-image"
            className="rounded-full h-[300px]"
          />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-12 justify-center font-medium">
            <p>Nombre: </p>
            <p>Apellido: </p>
            <p>Imagen (URL): </p>
            <p>Email: </p>
          </div>
          <div className="flex flex-col justify-center text-black pt-8">
            <input
              value={info.firstName}
              name="firstName"
              type="text"
              className="h-10 rounded-full pl-5 mb-1"
              onChange={handleChange}
            />
            <p className="text-red-500 h-7">{errors.firstName}</p>
            <input
              value={info.lastName}
              name="lastName"
              type="text"
              className="h-10 rounded-full pl-5 mb-1"
              onChange={handleChange}
            />
            <p className="text-red-500 h-7">{errors.lastName}</p>
            <input
              value={info.photo}
              name="photo"
              type="text"
              className="h-10 rounded-full pl-5 mb-1"
              onChange={handleChange}
            />
            <p className="text-red-500 h-7">{errors.photo}</p>
            <input
              value={info.email}
              name="email"
              type="text"
              className="h-10 rounded-full pl-5 mb-1"
              onChange={handleChange}
            />
            <p className="text-red-500 h-7">{errors.email}</p>
          </div>
          <div className="flex flex-col justify-center ml-5">
            <button
              onClick={handleSubmit}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Guardar cambios
            </button>
            <button
              onClick={handlePasswordChange}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
