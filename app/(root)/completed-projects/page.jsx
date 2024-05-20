"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { realProjects, serviceCards } from "@/lib";

const CompletedProjects = () => {
  return (
    <main className="mt-32 lg:mt-44">
      <section className="w-10/12 mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="clamp2 font-semibold text-center"
        >
          Реализованные проекты
        </motion.p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-top gap-5 mt-10 w-10/12 md:w-9/12 mx-auto text-center">
        {realProjects.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl flex flex-col items-center"
          >
            <span className="img-container">
              <Image src={item.img} alt="cards" />
            </span>
            <h3 className="font-semibold clamp3Half mt-5">{item.title}</h3>
            <p className="mt-3 clamp4Half w-10/12 text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default CompletedProjects;