import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Yup

import { object, string } from "yup";

const schema = object({
  firstName: string()
    .required("Campo Obrigatorio")
    .min(3, "Minimo de 3 digitos"),
  lastName: string().required("Campo Obrigatorio"),
  email: string().required("Campo Obrigatorio"),
  cpf: string().required("Campo Obrigatorio"),
  senha: string().required("Campo Obrigatorio"),
  repetirsenha: string().required("Campo Obrigatorio"),
  termo: string().required("Campo Obrigatorio"),
});

export default function Registro() {
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
                      flex justify-center items-center"
    >
      <div
        className="w-[500px] h-max p-[20px] bg-gray-600  
                      flex items-center justify-center flex-col rounded-lg"
      >
        <h1
          className="text-orange-600 font-bold font-mono
                         text-4xl"
        >
          Faça seu Cadastro:
        </h1>
        <div className="w-full">
          <form
            onSubmit={onSubmit(handleSubmit)}
            className="flex flex-col items-center
                           text-white
                      mt-[30px] gap-[10px] "
            action="/"
          >
            <div>
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-black pl-[10px]"
                {...register("firstName")}
                type="text"
                id="firstName"
                placeholder="Nome :"
              />
              <span className="text-red-500 rounded-lg p-1 ">
                {errors?.firstName?.message?.toString()}
              </span>
            </div>

            <div>
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-black pl-[10px]"
                {...register("lastName")}
                type="text"
                id="lastName"
                placeholder="Sobrenome :"
              />
              <span className=" text-red-500 rounded-lg p-1">
                {errors?.lastName?.message?.toString()}
              </span>
            </div>

            <div>
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-black pl-[10px]"
                {...register("email")}
                type="email"
                id="email"
                placeholder="E-mail :"
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.email?.message?.toString()}
              </span>
            </div>

            <div>
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-black pl-[10px]"
                {...register("cpf")}
                type="text"
                id="cpf"
                placeholder="CPF :"
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.cpf?.message?.toString()}
              </span>
            </div>

            <div>
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-black pl-[10px]"
                {...register("senha")}
                type="password"
                id="senha"
                placeholder="Senha :"
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.senha?.message?.toString()}
              </span>
            </div>
            <div>
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-black pl-[10px]"
                {...register("repetirsenha")}
                type="password"
                id="repetirsenha"
                placeholder="Repetir Senha :"
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.repetirsenha?.message?.toString()}
              </span>
            </div>

            <div className="flex items-center mt-[20px] ">
              <label>Aceitar Termos:</label>
              <input
                className=" rounded-lg flex w-10 mt-[4px] "
                {...register("termo")}
                type="checkbox"
                id="termo"
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.termo?.message?.toString()}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="mt-[30px]
              pt-[5px] pb-[5px] bg-orange-600
              rounded-lg w-[120px]"
              >
                Cadastrar
              </button>

              <button
                className="mt-[30px]
              pt-[5px] pb-[5px] bg-orange-600
              rounded-lg w-[120px]"
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
