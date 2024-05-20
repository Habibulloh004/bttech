import { Facebook, Instagram, Telegram } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-20">
      <div className="container w-10/12 mx-auto">
        <article className="flex justify-between lg:justify-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clamp4 flex flex-col gap-2 text-gray-600"
          >
            <p className="font-bold text-black">О нас</p>
            <Link href={"/about"}>О компании</Link>
            <Link href={"/completed-projects"}>Реализованные проекты</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <p className="font-bold text-black clamp4 text-right">
              Наши Соц. сеты
            </p>
            <Link
              href={`https://www.facebook.com/profile.php?id=61557610183662&locale=ru_RU`}
              target="_blank"
              className="cursor-pointer w-28 flex gap-2 items-center justify-end"
            >
              <Image src={Facebook} alt="icon" />
              <p className="clamp4 w-1/2">Facebook</p>
            </Link>
            <Link
              href={`https://www.instagram.com/bt_tech__?igsh=eGI0djNidHBxaDJy`}
              target="_blank"
              className="cursor-pointer w-28 flex gap-2 items-center justify-end"
            >
              <Image src={Instagram} alt="icon" />
              <p className="clamp4 w-1/2">Instagram</p>
            </Link>
            <Link
              href={`https://t.me/BTTECHUZB`}
              target="_blank"
              className="cursor-pointer w-28 flex gap-2 items-center justify-end"
            >
              <Image src={Telegram} alt="icon" />
              <p className="clamp4 w-1/2">Telegram</p>
            </Link>
          </motion.div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
