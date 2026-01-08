"use client";
import React, { useEffect, useRef } from "react";
import services from "@/app/api/servicesData";
import styles from "./ServicesStack.module.css";

// respects prefers-reduced-motion

export default function ServicesStack() {
  const NumberTest = [1,2,3,4,5]
  const sectionRef = useRef<HTMLElement | null>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const num = services.length;

    if (prefersReduce) {
      cardsRef.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translate(-50%, 0px) scale(1) rotateX(0deg)";
        el.style.pointerEvents = "auto";
      });
      return;
    }

    const updateSizes = () => {
      const vh = window.innerHeight;
      const total = vh * num;
      if (spacerRef.current) spacerRef.current.style.height = `${total}px`;
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        el.style.willChange = "transform, opacity";
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        el.style.transform = `translate(-50%, ${vh * 0.08}px) scale(0.96) rotateX(12deg)`;
        el.style.zIndex = `${1000 - i}`;
      });
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);

    const getStart = () => {
      if (!spacerRef.current) return 0;
      const rect = spacerRef.current.getBoundingClientRect();
      return window.scrollY + rect.top;
    };

    const getTotalScroll = () => {
      if (!spacerRef.current) return 1;
      return Math.max(1, spacerRef.current.offsetHeight - window.innerHeight);
    };

    const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

    function animate() {
      if (!spacerRef.current) return;
      const start = getStart();
      const total = getTotalScroll();
      const raw = (window.scrollY - start) / total;
      const progress = clamp(raw, 0, 1);

      const segment = 1 / num;

      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const startI = i * segment;
        const endI = (i + 1) * segment;
        const local = clamp((progress - startI) / (endI - startI), 0, 1);

        if (local > 0 && local <= 1) {
          const scale = 0.96 + 0.07 * local;
          const translateY = window.innerHeight * 0.08 * (1 - local);
          const rotateX = 12 * (1 - local);
          const opacity = local;
          el.style.opacity = String(opacity);
          el.style.transform = `translate(-50%, ${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
          el.style.zIndex = `${2000}`;
          el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
        } else if (progress >= endI) {
          const after = clamp((progress - endI) / segment, 0, 1);
          const scale = 1 - 0.08 * after;
          const opacity = Math.max(0, 1 - after);
          const translateY = window.innerHeight * 0.02;
          el.style.opacity = String(opacity);
          el.style.transform = `translate(-50%, ${translateY}px) scale(${scale}) rotateX(14deg)`;
          el.style.zIndex = `${1000 - i}`;
          el.style.pointerEvents = "none";
        } else {
          el.style.opacity = "0";
          el.style.transform = `translate(-50%, ${window.innerHeight * 0.08}px) scale(0.96) rotateX(12deg)`;
          el.style.zIndex = `${1000 - i}`;
          el.style.pointerEvents = "none";
        }
      });


      if (stickyRef.current) {
        if (progress >= 1) {
          stickyRef.current.style.position = "relative";
        } else {
          stickyRef.current.style.position = "sticky";
          stickyRef.current.style.top = "0px";
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSizes);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);





  return (
    <section ref={sectionRef} aria-labelledby="services-title" id="servicesSection" className={` ${styles.section}`}>
      <h2 id="services-title" className={`${styles.heading}  text-center w-fit m-auto` }>
        What I Can Do For You
      </h2>
      <p className={`mx-auto w-[900px] text-gray-400`}>I help improve and build modern web interfaces by fixing bugs, developing responsive front-end solutions, and redesigning existing websites. My focus is on clean code, smooth user experience, and turning ideas into fast, functional, and visually polished products.</p>

      <div ref={spacerRef} className={styles.stackSpacer}>
        <div ref={stickyRef} className={styles.stickyWrap}>
          <div className={`${styles.stackWrap}`}>
            {services.map((svc, i) => (
              <article
                ref={(el) => { cardsRef.current[i] = el }}
                key={svc.id}
                className={`${styles.card} flex xl:flex-row sm:flex-col gap-6   bg-light-mode-a xl:-my-14 -my-10`}
                role="article"
                aria-label={svc.title}
              >
                <div className="sm:h-fit xl:h-full w-full">
                  {}
                <div className={`marker-poiner xl:h-full  xl:w-full rounded-2xl xl:translate-y-0 sm:-translate-y-10 sm:h-42 [clip-path:none]  sm:w-full  bg-center    ${styles.imagePath} `} style={{backgroundColor: "#fff", backgroundImage: `url(${svc.Img})`, backgroundPosition: 'center' , backgroundSize : 80+"%" , backgroundRepeat: 'no-repeat'}}></div>

                  <div className={`${styles.icon}  w-fit xl:bg-white  xl:text-light-mode-a bg-light-mode-a  rounded-full   absolute sm:top-4 sm:left-4 xl:p-16 sm:p-2 shadow-dark-mode-a/90  `}>{svc.icon}</div>
                  </div>
                <div className={`${styles.cardInner} sm:-translate-y-10`}>
                  <h3 className={`${styles.title} `}>{svc.title}</h3>
                  <p className={styles.desc}>{svc.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
