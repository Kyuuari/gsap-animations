import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {};

export default function ScrollMarquee({}: Props) {
  const marquee = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    let ctx = gsap.context(() => {
      let tween = gsap
        .to(".marquee__part", {
          xPercent: -100,
          repeat: -1,
          duration: 10,
          ease: "linear",
        })
        .totalProgress(0.5);

      //   gsap.set(".marquee__inner", { xPercent: -50 });

      window.addEventListener("scroll", function () {
        if (window.pageYOffset > currentScroll) {
          isScrollingDown = true;
        } else {
          isScrollingDown = false;
        }

        gsap.to(tween, {
          timeScale: isScrollingDown ? 1 : -1,
        });

        currentScroll = window.pageYOffset;
      });

      //   //clean up animations
      return () => ctx.revert();
    });
  }, []);

  //TODO: Make Reusable
  return (
    <div ref={marquee} className="relative overflow-hidden bg-red-300">
      <div className="flex flex-row flex-auto w-fit gap-2 marquee__inner">
        <h1 className="text-5xl font-bold marquee__part whitespace-nowrap">
          food wine fish beef vegetables
        </h1>
        <h1 className="text-5xl font-bold marquee__part whitespace-nowrap">
          food wine fish beef vegetables
        </h1>
        <h1 className="text-5xl font-bold marquee__part whitespace-nowrap">
          food wine fish beef vegetables
        </h1>
        <h1 className="text-5xl font-bold marquee__part whitespace-nowrap">
          food wine fish beef vegetables
        </h1>
        <h1 className="text-5xl font-bold marquee__part whitespace-nowrap">
          food wine fish beef vegetables
        </h1>
      </div>
    </div>
  );
}
