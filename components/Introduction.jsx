import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Introduction = () => {
  return (
    <main className="relative w-full h-screen z-0 intro">
      {/* <div className="w-screen">
        <video className="w-full absolute -z-10" autoPlay muted loop>
          <source src={require("@/public/intro.mp4")} />
        </video>
      </div> */}
      <div className="absolute h-full w-full bg-black/30"></div>
      <section className="absolute z-10  text-white w-full text-center top-[55%] clamp left-0 py-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary clamp2 font-semibold"
        >
          Солнечная энергия
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 clamp4 w-10/12 mx-auto"
        >
          Мы создаем будущее солнечной энергетики в Узбекистане! Проектирование,
          монтаж, и наладка солнечных станций для всех.
        </motion.p>
      </section>
      <motion.span
        initial={{ opacity: 0, y: -10, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        className="absolute z-10 bottom-20 left-1/2"
      >
        <Link
          href={"/about"}
          className="cursor-pointer clamp4 hover:bg-white hover:text-black  border-2 border-white  py-2 px-4 rounded-full text-white text-sm"
        >
          Узнать больше
        </Link>
      </motion.span>
    </main>
  );
};

export default Introduction;
