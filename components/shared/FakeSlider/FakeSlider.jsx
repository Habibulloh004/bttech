"use client";
import { useEffect } from "react";
import styles from "./FakeSlider.module.css";

const FakeSlider = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(`.${styles.scroller}`);

    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        `.${styles.scroller__inner}`
      );
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.scroller} data-speed="fast">
          <ul className={`${styles.tagList} ${styles.scroller__inner}`}>
            {cards.map((item, idx) => (
              <li
                className={`${styles.tagItem} w-44 md:w-64 lg:w-96 aspect-[11/8]`}
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={idx}
              ></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div
          className={styles.scroller}
          data-direction="right"
          data-speed="slow"
        >
          <ul className={`${styles.tagList} ${styles.scroller__inner}`}>
            {cards2.map((item, idx) => (
              <li
                className={`${styles.tagItem} w-44 md:w-64 lg:w-96 aspect-[11/8]`}
                style={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={idx}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FakeSlider;

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
    title: "Title 8",
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
    title: "Title 8",
    id: 8,
  },
];
