import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {};

export default function ScrollMarquee({}: Props) {
  const marquee_inner = useRef<HTMLDivElement>(null!);

  // const width = parseInt(getComputedStyle(ref.current).getPropertyValue("width"))

  useLayoutEffect(() => {
    const width = gsap.getProperty(marquee_inner.current, "width");
    // const clone = marquee_inner.current.cloneNode(true);
    // marquee_inner.current.append(clone);

    console.log(width);
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.fromTo(
        marquee_inner.current,
        { x: 0 },
        { x: width, duration: 5, ease: "none", repeat: -1 }
      );
    });
    //clean up animations
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={marquee_inner}
        className="flex overflow-hidden gap-5 bg-red-300"
      >
        <h1 className="text-5xl font-bold">Scroll Marquee</h1>
        <h1 className="text-5xl font-bold">Scroll Marquee</h1>
        <h1 className="text-5xl font-bold">Scroll Marquee</h1>
      </div>
    </div>
  );
}
