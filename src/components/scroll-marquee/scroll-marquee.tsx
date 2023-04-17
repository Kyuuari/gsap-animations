import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {};

export default function ScrollMarquee({}: Props) {
  const marquee = useRef<HTMLDivElement>(null!);

  // const width = parseInt(getComputedStyle(ref.current).getPropertyValue("width"))
  //   const width = gsap.getProperty(marquee.current, "width");

  // const clone = marquee_inner.current.cloneNode(true);
  // marquee_inner.current.append(clone);

  useLayoutEffect(() => {
    // const marqueeContent = marquee.current.firstChild!;
    // const marqueeClone = marqueeContent.cloneNode(true);
    // marquee.current.append(marqueeClone);

    // const playMarquee = () => {
    //   const width = gsap.getProperty(marqueeContent, "width");
    //   const gap = gsap.getProperty(marqueeContent, "column-gap");

    //   const widthAsNumber: number =
    //     typeof width === "string" ? Number(width) : width;

    //   const gapAsNumber: number = typeof gap === "string" ? Number(gap) : gap;

    //   const distance = -1 * (gapAsNumber + widthAsNumber);

    //   let ctx = gsap.context(() => {
    //     // use scoped selectors
    //     gsap.fromTo(
    //       marquee.current.children,
    //       { x: 0 },
    //       { x: distance, duration: 2, ease: "none", repeat: -1 }
    //     );
    //   });
    //   //clean up animations
    //   return () => ctx.revert();
    // };
    // playMarquee();
    // window.addEventListener("resize", playMarquee);

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

  return (
    // <div className="w-screen">
    // <div ref={marquee} className="overflow-hidden w-full flex flex-row gap-1">
    //   <div className="flex flex-row min-w-1/2 gap-1 justify-evenly">
    //     <h1 className="text-5xl font-bold">Marquee.</h1>
    //     <h1 className="text-5xl font-bold">Marquee.</h1>
    //     <h1 className="text-5xl font-bold">Marquee.</h1>
    //     <h1 className="text-5xl font-bold">Marquee.</h1>
    //     <h1 className="text-5xl font-bold">Marquee.</h1>
    //   </div>
    // </div>
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
    // </div>
  );
}
