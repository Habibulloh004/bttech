import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Slider = () => {
  return (
    <div className="">
      <HorizontalScrollCarouselRight />
      <HorizontalScrollCarouselLeft />
    </div>
  );
};

const HorizontalScrollCarouselRight = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const HorizontalScrollCarouselLeft = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards2.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative w-40 aspect-[12/9] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Slider;

const cards = [
  {
    url: "https://r.mobirisesite.com/363596/assets/images/bef81ed9-9a2d-4daa-b491-cdc5687be1f8-864x648.webp",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-7831-864x648.webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-511-864x648.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/photo-1589275776107-e193042128bd.webp",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/bef81ed9-9a2d-4daa-b491-cdc5687be1f8-864x648.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-7831-864x648.webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-511-864x648.webp",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/photo-1589275776107-e193042128bd.webp",
    title: "Title 7",
    id: 8,
  },
];
const cards2 = [
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-250-864x648.webp",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-1182-864x648.webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-8294-864x482.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/photo-1552197892-f2ad2f75e7c8.webp",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-250-864x648.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-1182-864x648.webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/img-8294-864x482.webp",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://r.mobirisesite.com/363596/assets/images/photo-1552197892-f2ad2f75e7c8.webp",
    title: "Title 7",
    id: 8,
  },
];
