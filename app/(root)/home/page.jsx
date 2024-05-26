"use client";
import React from "react";
import { motion } from "framer-motion";
import { cards, questions } from "@/lib";
import Image from "next/image";
import { About } from "@/public";
import Introduction from "@/components/Introduction";

const Home = () => {
  return (
    <>
      <Introduction />
      <main className="pt-1 bg-secondary/5 mt-10 md:mt-20">
        <section className="py-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center clamp2"
          >
            Часто задаваемые вопросы
          </motion.h2>
          <div className="flex flex-col gap-5 mt-5 w-[95%] md:w-9/12 mx-auto">
            {questions.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  transition={{ delay: idx / 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-7 md:py-10 md:px-14 shadow-md"
                >
                  <h3 className="font-semibold clamp3">{item.title}</h3>
                  <p className="mt-3 clamp4">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <div className="mt-10 md:mt-20">
        <Image src={About} className="w-full h-full bg-cover" alt="img" />
      </div>
      <main className="mt-10 md:mt-20">
        <section className="">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center clamp2"
          >
            Применение
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-top gap-5 mt-10 w-[95%] mx-auto">
            {cards.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{delay: idx / 10}}
                viewport={{ once: true }}
                className="bg-white rounded-xl flex flex-col items-center"
              >
                <span className="img-container w-full">
                  <Image src={item.img} className="w-full aspect-[9/11]" alt="cards" />
                </span>
                <h3 className="font-semibold clamp3Half mt-5">{item.title}</h3>
                <p className="mt-3 clamp4Half w-10/12 text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
