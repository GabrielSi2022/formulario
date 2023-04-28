import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

// imagem

import Image from "next/image";
import logo from "/public/logo-gabriel.png";
import { Login } from "@/services/firebase";

const schema = object({
  user: string()
    .required("Campo Obrigatorio")
    .min(6, "Minimo de 6 digitos")
    .email("Email inválido"),
  senha: string().required("Campo Obrigatorio"),
});

export default function Home() {
  const router = useRouter();

  //////Login com conta Google.
  // async function signInWithGoogle() {
  //   try {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     const result = await auth.signInWithPopup(provider);

  //     router.push("/login");

  //     return result;
  //   } catch (error) {}
  // }

  // const loginComEmailSenha = async (user: any, senha: any) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, user, senha);
  //     console.log(user, senha);
  //     return router.push("/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);
  const handleSubmit = async (user: any, password: any) => {
    Login({ user, password })
      .then(() => router.push("/login"))
      .catch((e) => console.log(e));
  };

  return (
    <main
      className="bg-gray-800 h-screen
                      flex justify-start
                       items-center
                       max-[768px]:flex-col-reverse max-[768px]:h-screen"
    >
      <div
        className="w-1/2 h-full p-[20px] bg-gray-200  
                      flex items-center justify-center flex-col rounded-lg
                     max-[768px]:w-full max-[768px]:rounded-none max-[768px]:h-full"
      >
        <h1
          className="text-orange-600 font-bold font-mono
                         text-4xl"
        >
          Faça seu Login
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
              Login
            </button>
          </form>
        </div>

        <div className="mt-[30px]">
          <p className="text-black">
            Ainda nao possui conta?{" "}
            <Link
              href="/registro"
              className=" text-orange-500
                          hover:text-orange-600"
            >
              Cadastre aqui
            </Link>
          </p>
        </div>

        <div className="mt-[5px]">
          <p className="text-black">
            Ou logue com sua conta{" "}
            {/* <button onClick={signInWithGoogle}> Google</button> */}
          </p>
        </div>
      </div>

      <div
        className="w-1/2 flex justify-center
                       max-[768px]:h-full max-[768px]:w-full
                       max-[768px]:items-center max-[768px]:justify-center "
      >
        <Image src={logo} alt="" className="w-auto" width={350} />
      </div>
    </main>
  );
}
