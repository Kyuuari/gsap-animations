import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {};

export default function DropDown({}: Props) {
  const ref = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.fromTo(
        ref.current.childNodes,
        { yPercent: -100 },
        { yPercent: 0, stagger: 0.5 }
      );
    });

    //clean up animations
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="bg-blue-500 h-screen flex flex-row">
      <div className="flex-1 bg-green-500"></div>
      <div className="flex-1 bg-yellow-500"></div>
      <div className="flex-1 bg-red-500"></div>
    </div>
  );
}
