"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./shared/AnimatedCounter";
import Image from "next/image";
import {
  Partners,
  Section3,
  beu1,
  beu2,
  beu3,
  beu4,
  beu5,
  beu6,
  beu7,
  beu8,
} from "@/public";
import { animatedText, contacts, docs, projects, status } from "@/lib";
import Map from "./shared/Map";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FakeSlider from "./shared/FakeSlider/FakeSlider";

const Info = () => {
  const path = usePathname();

  return (
    <>
      <main
        className={`mt-10 md:mt-20 section2 h-64 md:h-96 xl:h-[500px]  ${
          path == "/services" || path == "/about" || path == "/catalog"
            ? "hidden"
            : "block"
        }`}
      >
        <section className="relative pt-[5%] text-center h-full ">
          <div className="bg-white/50 py-5">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center clamp2 lg:w-1/2 mx-auto leading-tight"
            >
              Солнечная энергия для всех!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="clamp4 mt-2 lg:mt-4"
            >
              Строим солнечные электростанции для будущего. Присоединяйтесь!
            </motion.p>
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 flex flex-col gap-3 sm:gap-3 sm:flex-row">
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="py-2 px-4 lg:px-6 lg:py-3 clamp5 text-white bg-primary rounded-full"
              >
                Узнать больше
              </Link>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="py-2 px-4 lg:px-6 lg:py-3 clamp5 text-white bg-[#31499E] rounded-full"
              >
                Связаться с нами
              </Link>
            </motion.button>
          </div>
        </section>
      </main>
      <main
        className={`mt-10 md:mt-20 text-primary font-medium  clamp1 ${
          path == "/catalog" ? "hidden" : "block"
        }`}
      >
        <section className="w-9/12 mx-auto grid place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-end">
              <AnimatedCounter from={0} to={400} />
              <p className="w-[80%]">+ МВт</p>
            </span>
            <p className="flex-1 clamp4 text-black">построено проектов</p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-end gap-1">
              <AnimatedCounter from={0} to={14} />
              <p className="w-1/2">лет</p>
            </span>
            <p className="flex-1 clamp4 text-black">
              успешной работы в области ВИЭ
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center">
              <p>EPC лидер</p>
            </span>
            <p className="flex-1 clamp4 text-black">в солнечной энергетике</p>
          </motion.article>
        </section>
      </main>
      <main
        className={`mt-10 md:mt-20  ${path == "/about" ? "block" : "hidden"}`}
      >
        <FakeSlider />
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-2 lg:gap-5 "
        >
          <Image
            className="w-[35%] aspect-[16/12] rounded-e-[26px]"
            src={beu1}
            alt="img"
          />
          <Image
            className="w-[35%] aspect-[16/12] rounded-[26px]"
            src={beu2}
            alt="img"
          />
          <Image
            className="w-[35%] aspect-[16/12] rounded-[26px]"
            src={beu3}
            alt="img"
          />
          <Image
            className="w-[35%] aspect-[16/12] rounded-s-[26px]"
            src={beu5}
            alt="img"
          />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 lg:gap-5 mt-5 "
        >
          <Image
            className="w-[35%] aspect-[16/12] rounded-e-[26px]"
            src={beu4}
            alt="img"
          />
          <Image
            className="w-[35%] aspect-[16/12] rounded-[26px]"
            src={beu6}
            alt="img"
          />
          <Image
            className="w-[35%] aspect-[16/12] rounded-[26px]"
            src={beu7}
            alt="img"
          />
          <Image
            className="w-[35%] aspect-[16/12] rounded-s-[26px]"
            src={beu8}
            alt="img"
          />
        </motion.section> */}
      </main>
      <main
        className={`mt-10 md:mt-20  ${path == "/about" ? "block" : "hidden"}`}
      >
        <section className="w-10/12 mx-auto flex flex-col lg:flex-row">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold text-primary w-full lg:w-1/2"
          >
            BTT Solar - лидер в солнечной энергетике Узбекистана!
          </motion.p>
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="clamp4Half mt-5"
            >
              Функции
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="clamp4Half mt-5"
            >
              Разнообразные направления деятельности компании расширяют
              функционал, основанный на спросе потребителя. За длительное время
              существования на рынке услуг в строительном бизнесе мы выполнили
              ряд проектов в лице генерального подрядчика. Управление
              строительством является одной из основных функций компании «BTT».
              В нашем штате опытные сотрудники обладают необходимыми навыками,
              знаниями, чтобы выполнять работы, требующие ответственного
              подхода. Также мы готовы стать поставщиком качественного
              оборудования. Мы поставляем оборудование, контролируя его сборку,
              по договоренности с клиентом. Шеф монтаж осуществляется опытными
              специалистами, гарантирующими качество сданного
              объекта Преимущества компании  
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="clamp4Half mt-5"
            >
              Наша компания предлагает наилучшие варианты строительства объектов
              разного назначения. Оптимальная технология выбирается с учетом
              пожеланий заказчика и имеющегося опыта. «BTT» обладает
              преимуществами в работе: надежный партнер в реализации проектов,
              что подтверждается длительным существованием компании; основное
              направление деятельности – строительство спортивных объектов,
              объектов генерации в области ВИЭ; сотрудники обладают практическим
              опытом в работе; наличие документации, разрешающей
              строительство; регулярная аттестация персонала проводится для
              успешного проведения строительных работ; наличие собственного
              оборудования; качественное проведение ремонтных работ с
              предоставлением гарантийного обслуживания. Мы готовы
              проконсультировать клиентов по особенностям работы на строительном
              рынке. Проектирование с дальнейшим прохождением экспертизы
              находится в компетенции сотрудников нашей организации. Персонал
              компании несет личную ответственность при выполнении задач, что
              обеспечивает качественную организацию сделки с клиентом.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="clamp4Half mt-5"
            >
              Для составления договора, предполагающего взаимовыгодное
              сотрудничество, вам необходимо оставить заявку на сайте компании.
              Менеджер свяжется с вами, чтобы обсудить условия совместной
              деятельности. Мы предлагаем такие услуги, как строительство
              объектов под ключ, так и помощь в поставках оборудования, ремонт
              объектов, установка ресурсосберегающих систем, работающих с
              использованием альтернативных источников энергии. Профессиональная
              команда нашей компании способна обеспечить технический надзор и
              выступить в роли шефа-монтажа при реализации проектов
              ветроэнергетики
            </motion.p>
          </div>
        </section>
      </main>
      <div
        className={`mt-10 md:mt-20 ${path == "/about" ? "hidden" : "block"} `}
      >
        <Image src={Section3} className="w-full h-full bg-cover" alt="img" />
      </div>
      <main
        className={`mt-10 md:mt-20 overflow-x-hidden ${path == "/about" ? "hidden" : "block"}`}
      >
        <section className="flex flex-col lg:flex-row items-center justify-between mx-auto w-10/12">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold"
          >
            BTT Solar - лидер в солнечной энергетике Узбекистана!
          </motion.p>
          <div className="clamp4 space-y-3 lg:space-y-6 mt-3">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Мы специализируемся на строительстве солнечных электростанций и
              предлагаем полный цикл услуг: от проектирования до монтажа и
              наладки.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Наша международная команда обладает более 400 МВт реализованных
              проектов. Доверьте нам свою энергию!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              BTT Solar - ваш надежный EPC-партнер для крупных и малых проектов
              в солнечной энергетике.
            </motion.p>
          </div>
        </section>
      </main>
      <main className="mt-10 md:mt-20">
        <section className="mx-auto w-7/12 md:w-10/12 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold"
          >
            Наши проекты
          </motion.p>
          <ul className="projects mt-5 grid place-items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((item, idx) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx / 10 }}
                  viewport={{ once: true }}
                  key={item.id}
                  className="space-y-1"
                >
                  <div className="project-img-container">
                    <Image src={item.img} alt="project" />
                  </div>
                  <p className="clamp3Half font-semibold pt-3">{item.title}</p>
                  <p className="clamp3Half">{item.date}</p>
                  <p className="clamp4Half">{item.description}</p>
                </motion.li>
              );
            })}
          </ul>
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 lg:mt-10"
          >
            <Link href="/completed-projects" className="px-3 py-2 lg:px-6 lg:py-3 clamp4 bg-primary text-white rounded-full">Подробнее о проектах</Link>
          </motion.button>
        </section>
      </main>
      <main
        className={`mt-10 md:mt-20 bg-secondary/5  py-10 ${
          path == "/about" ? "hidden" : "block"
        } `}
      >
        <section className="w-[95%] md:w-10/12 mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold lg:w-4/12 text-center"
          >
            Инновации и устойчивость
          </motion.p>
          <ul className="projects mt-5 grid place-items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {status.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx / 10 }}
                viewport={{ once: true }}
                className="space-y-1 md:space-y-2 lg:space-y-4 pt-12 bg-white h-[200px] sm:h-[300px] md:h-[350px] text-center shadow-lg rounded-2xl p-5"
              >
                <p className="clamp3 font-semibold">{item.title}</p>
                <p className="clamp4Half">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
      <div className="mt-10 md:mt-20 ">
        <section className="w-[95%] mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold text-center"
          >
            Наши партнеры
          </motion.p>
          <Image src={Partners} className="mt-5" alt="partners" />
        </section>
      </div>
      <main className="mt-10 md:mt-20 bg-secondary/5 py-10 ">
        <section className="w-[95%] mx-auto flex-col items-center hidden">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold lg:w-4/12 text-center"
          >
            Документы
          </motion.p>
          <ul className="projects mt-7 grid place-items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {docs.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx / 10 }}
                viewport={{ once: true }}
                className="space-y-1 md:space-y-2 lg:space-y-4 bg-white shadow-lg rounded-[30px] overflow-hidden w-full"
              >
                <div className="card-top bg-primary text-white text-left px-8 py-6 w-full">
                  <p className="clamp3 font-semibold">{item.titleTop}</p>
                  <p className="clamp4Half">{item.titleBottom}</p>
                </div>
                <div className="card-bottom p-2 px-6 pb-10 flex flex-col items-end">
                  <p className="clamp5 w-full">{item.description}</p>
                  <button className="clamp5 mt-8 bg-primary text-white py-2 px-3 rounded-[50px]">
                    Загрузить
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>
        <section className="w-10/12 mx-auto mt-10 justify-center flex-col items-center hidden">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="clamp2 font-semibold lg:w-4/12 text-center"
          >
            Связаться с нами
          </motion.p>
          <div className="w-full md:w-8/12 lg:w-5/12 text-sm flex flex-col items-center gap-4">
            <span className="flex justify-between items-center gap-3 w-full mt-5">
              <motion.input
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                type="text"
                placeholder="Имя"
                className=" px-5 w-1/2 p-1 md:p-2 rounded-[30px] border-gray-400/50 border-2"
              />
              <motion.input
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                type="email"
                placeholder="Email"
                className=" px-5 w-1/2 p-1 md:p-2 rounded-[30px] border-gray-400/50 border-2"
              />
            </span>
            <motion.textarea
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              placeholder="Сообщение"
              className=" p-5 w-full rounded-[30px] h-24 border-gray-400/50 border-2"
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary py-1 px-3 md:px-5 md:py-2 rounded-[30px] clamp4 text-white"
            >
              Отправить
            </motion.button>
          </div>
        </section>
        <section id="contact"></section>
        <section className="w-10/12 lg:w-8/12 gap-10 mx-auto mt-10 md:mt-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="contacts flex flex-col items-start lg:w-[40%]">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="clamp2 font-bold"
            >
              Наши <br /> Контакты
            </motion.p>
            <ul className="mt-4 space-y-1 md:space-y-3">
              {contacts.map((item, idx) => {
                const findItem = item.id == 1;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx / 10 }}
                    viewport={{ once: true }}
                    className=""
                  >
                    {findItem ? (
                      <a className="clamp4" href={`tel:${item.value}`}>
                        {item.name} {item.value}
                      </a>
                    ) : (
                      <p className="clamp4">
                        {item.name} {item.value}
                      </p>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[55%] max-lg:mt-3"
          >
            <Map />
          </motion.div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Info;
