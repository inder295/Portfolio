import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function Skills() {
  const headlineRef = useRef(null);
  const splitRef = useRef<SplitText | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        gsap.set(headlineRef.current, { opacity: 1 });

        splitRef.current = SplitText.create(headlineRef.current, {
          type: "words",
          wordsClass: "word++",
          ignore: "sup"
        });

        gsap.from(splitRef.current.words, {
          y: -100,
          opacity: 0,
          rotation: "random(-80,80)",
          stagger: 0.1,
          duration: 1,
          ease: "back"
        });
      });
    }, headlineRef);

    return () => {
      ctx.revert();
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, []);

  return (
    <div className="mt-10 h-screen">
        <h1 className="text-3xl font-bold text-center mt-10 underline">Skills & Technologies</h1>

        <div ref={headlineRef} style={{ opacity: 0 }} className="flex items-center gap-5">
            <div  className="w-40 aspect-square text-2xl font-semibold bg-red-600 p-4 mt-10 rounded-lg ">
              <p className="flex justify-center items-center h-full">React Js </p>
            </div>

            <div  className="w-40 aspect-square text-2xl font-semibold bg-red-600 p-4 mt-10 rounded-lg">
              <p className="flex justify-center items-center h-full">React Js </p>
            </div>

        </div>

    </div>
  );
}
