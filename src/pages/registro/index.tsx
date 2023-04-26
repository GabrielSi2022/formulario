import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Yup

import { boolean, object, ref, string } from "yup";

//CPF Validator

import { cpf } from "cpf-cnpj-validator";

// imagem

import Image from "next/image";
import logo from "../../../public/logo-gabriel.png";

//link next
import Link from "next/link";

const schema = object({
  firstName: string()
    .required("Campo Obrigatorio")
    .min(3, "Minimo de 3 digitos"),
  lastName: string()
    .required("Campo Obrigatorio")
    .min(3, "Minimo de 3 digitos"),
  email: string()
    .required("Campo Obrigatorio")
    .min(6, "minimo 6 digitos")
    .email("O seu email é valido"),
  cpf: string().test((value: any) => {
    if (value.length != 0) {
      return cpf.isValid(value);
    } else {
      return true;
    }
  }),
  senha: string()
    .required("Campo Obrigatorio")
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*)[A-Za-z\d@$!%*#?&]{6,}$/,
      "A senha deve conter letras e numeros"
    ),
  repetirsenha: string()
    .required("Campo Obrigatorio")
    .oneOf([ref("senha")], "A senhas devem ser iguais"),
  termo: boolean().oneOf(
    [true],
    "Você tem que aceitar os termos de compromisso"
  ),
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
                      flex justify-start items-center"
    >
      <div
        className="w-1/2 h-full p-[20px] bg-gray-200  
                      flex items-center justify-center flex-col "
      >
        <h1
          className="text-orange-600 font-bold font-mono
                         text-4xl"
        >
          Faça seu Cadastro
        </h1>
        <div className="w-full">
          <form
            onSubmit={onSubmit(handleSubmit)}
            className="flex flex-col items-center
                           text-white
                      mt-[30px] gap-[5px] "
            action="/"
          >
            <div className="flex flex-col text-center">
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-white pl-[10px] placeholder-white
                         bg-gray-800"
                {...register("firstName")}
                type="text"
                id="firstName"
                placeholder="Nome "
              />
              <span className="text-red-500 rounded-lg p-1 ">
                {errors?.firstName?.message?.toString()}
              </span>
            </div>

            <div className="flex flex-col text-center">
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-white pl-[10px] placeholder-white bg-gray-800"
                {...register("lastName")}
                type="text"
                id="lastName"
                placeholder="Sobrenome "
              />
              <span className=" text-red-500 rounded-lg p-1">
                {errors?.lastName?.message?.toString()}
              </span>
            </div>

            <div className="flex flex-col text-center">
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-white pl-[10px] placeholder-white bg-gray-800"
                {...register("email")}
                type="text"
                id="email"
                placeholder="E-mail "
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.email?.message?.toString()}
              </span>
            </div>

            <div className="flex flex-col text-center">
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-white pl-[10px] placeholder-white bg-gray-800"
                {...register("cpf")}
                type="text"
                id="cpf"
                placeholder="CPF "
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.cpf?.message?.toString()}
              </span>
            </div>

            <div className="flex flex-col text-center">
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-white pl-[10px] placeholder-white bg-gray-800"
                {...register("senha")}
                type="password"
                id="senha"
                placeholder="Senha "
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.senha?.message?.toString()}
              </span>
            </div>
            <div className="flex flex-col text-center">
              <input
                className="h-[30px] w-[300px] rounded-lg 
                        text-white pl-[10px] placeholder-white bg-gray-800"
                {...register("repetirsenha")}
                type="password"
                id="repetirsenha"
                placeholder="Confirmar Senha "
              />
              <span className="text-red-500 rounded-lg p-1">
                {errors?.repetirsenha?.message?.toString()}
              </span>
            </div>

            <div className="flex flex-col items-center mt-[20px] text-black">
              <div className="flex ">
                <label>Aceitar Termos:</label>
                <input
                  className=" rounded-lg flex w-10  "
                  {...register("termo")}
                  type="checkbox"
                  id="termo"
                />
              </div>
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
                <Link href="/">Voltar</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <Image src={logo} alt="" className="w-auto " width={350} />
      </div>
    </main>
  );
}
