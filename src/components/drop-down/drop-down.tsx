import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {};

export default function DropDown({}: Props) {
  const ref = useRef<any>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(ref.current, { y: 100 });
    }, ref);

    //clean up animations
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="h-screen bg-green-500">
      DropDown
    </div>
  );
}
