"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import { Logo4 } from "@/public";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (window.innerWidth < 1280) {
      setOpen(false);
    }
  }, []);

  return (
    <header className="fixed top-8 w-full z-[9999]">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-10/12 mx-auto shadow-lg bg-white/60 flex justify-between items-center rounded-full p-2"
      >
        <motion.div
          className=""
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
            },
          }}
        >
          <Link href="/home" className="flex items-center gap-2 ">
            <Image src={Logo4} alt="BT Tech" className="w-28 md:w-44 h-full" />
          </Link>
        </motion.div>
        <ul className="flex items-center justify-start gap-2 xl:gap-5 font-medium">
          {navItems.map((item, idx) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 + idx / 10,
                  },
                }}
                key={item.hash}
              >
                <Link
                  href={item.hash}
                  className={`hidden xl:block ${
                    idx == navItems.length - 1
                      ? "max-xl:block bg-primary text-white p-2 md:px-7 md:py-5"
                      : "py-5 px-4 "
                  } ${
                    path == item.hash && "font-semibold"
                  } h-full rounded-full text-sm md:text-base`}
                >
                  {item.title}
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            className="mx-3 block xl:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2 + 5 / 10,
              },
            }}
          >
            <Menu
              className="cursor-pointer"
              onClick={() => setOpen((pv) => !pv)}
            />
          </motion.li>
          <motion.li
            animate={open ? "open" : "closed"}
            className={`block xl:hidden relative`}
          >
            <motion.ul
              initial={wrapperVariants.closed}
              variants={wrapperVariants}
              style={{ originY: "top", translateX: "-100%", translateY: "30%" }}
              className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[250%] left-[-200%] w-48 overflow-hidden"
            >
              {/* <Option setOpen={setOpen} href={`/catalog`} text="Каталог" /> */}
              <Option setOpen={setOpen} href={`/services`} text="Услуги" />
              <Option setOpen={setOpen} href={`/about`} text="О нас" />
              <Option
                setOpen={setOpen}
                href={`/completed-projects`}
                text="Реализованные проекты"
              />
            </motion.ul>
          </motion.li>
          {/* <li className="block xl:hidden mx-3">
            <Menu />
            <ul className="absolute -top-8 right-0 h-screen w-1/2 bg-white">
              {navItems.map((item, i) => {
                return (
                  <li
                    key={item.hash}
                    className={`py-5 px-4 xl:block ${
                      i == navItems.length - 1 && "hidden"
                    }`}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </li> */}
        </ul>
      </motion.nav>
    </header>
  );
}
const Option = ({ text, Icon, setOpen, href }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-primary/20 text-black = transition-colors cursor-pointer"
    >
      <Link href={href}>{text}</Link>
    </motion.li>
  );
};
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
