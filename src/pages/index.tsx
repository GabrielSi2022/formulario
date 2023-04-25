import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main
      className="bg-gray-800 h-screen
                      flex justify-center items-center"
    >
      <div
        className="w-[500px] h-[500px] p-[20px] bg-gray-600  
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
          >
            <label className="text-center">Email</label>
            <input
              className="h-[30px] w-[300px] rounded-lg mt-[10px]
                        text-black text-center"
              type="email"
              name="user"
              id="user"
              required
            />
            <label className="text-center mt-[10px]">Senha</label>
            <input
              className="h-[30px] w-[300px] rounded-lg mt-[10px] text-black text-center"
              type="password"
              required
            />
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
          <p className="text-white">
            Ainda nao possui conta?{" "}
            <Link href="/registro" className=" hover:text-orange-500">
              Cadastre aqui
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
