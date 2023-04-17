import React, {
  Children,
  ReactPropTypes,
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";

type Props = {
  children?: React.ReactNode;
  //   children?: ReactPropTypes;
};

export default function TextStagger({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    const chars = ref.current.innerText.split("");
    // console.log(chars);
    ref.current.innerText = "";
    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;
      ref.current.appendChild(span);
      gsap.fromTo(
        span,
        {
          opacity: 0,
          yPercent: 0,
        },
        {
          opacity: 1,
          yPercent: 100,
          duration: 0.3,
          delay: index * 0.05,
          stagger: 1,
        }
      );
    });
  }, []);

  return (
    <h1 ref={ref} className="text-5xl font-sans font-bold">
      {children}
    </h1>
  );
}
