import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

// imagem

import Image from "next/image";
import logo from "/public/logo-gabriel.png";

const schema = object({
  user: string()
    .required("Campo Obrigatorio")
    .min(6, "Minimo de 6 digitos")
    .email("Email inválido"),
  senha: string().required("Campo Obrigatorio"),
});

export default function Home() {
  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main
      className="bg-gray-800 h-screen
                      flex justify-start
                       items-center"
    >
      <div
        className="w-1/2 h-full p-[20px] bg-gray-200  
                      flex items-center justify-center flex-col rounded-lg"
      >
        <h1
          className="text-orange-600 font-bold font-mono
                         text-4xl"
        >
          Faça seu Login:
        </h1>
        <div className="w-full">
          <form
            className="flex flex-col items-center
                           text-white
                      mt-[30px] "
            action="/"
            onSubmit={onSubmit(handleSubmit)}
          >
            <div className="flex flex-col">
              <input
                className="h-[30px] w-[300px] rounded-lg mt-[10px]
                        text-white text-center placeholder:text-white
                         bg-gray-800"
                {...register("user")}
                type="text"
                id="user"
                placeholder="Email"
              />

              <span className="text-red-500 rounded-lg p-1  text-center">
                {errors?.user?.message?.toString()}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                className="h-[30px] w-[300px] rounded-lg mt-[10px] text-white 
                           placeholder:text-white text-center bg-gray-800"
                {...register("senha")}
                type="password"
                id="senha"
                placeholder="Senha"
              />
              <span className="text-red-500 rounded-lg p-1 text-center ">
                {errors?.senha?.message?.toString()}
              </span>
            </div>
            <button
              type="submit"
              className="mt-[30px]
              pt-[5px] pb-[5px] bg-orange-600
              rounded-lg w-[120px]"
            >
              Loguin
            </button>
          </form>
        </div>

        <div className="mt-[30px]">
          <p className="text-black">
            Ainda nao possui conta?{" "}
            <Link href="/registro" className=" hover:text-orange-500">
              Cadastre aqui
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <Image src={logo} alt="" className="w-auto " width={350} />
      </div>
    </main>
  );
}
