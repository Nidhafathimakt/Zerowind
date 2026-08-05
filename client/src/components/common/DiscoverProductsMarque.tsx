
  import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
function DiscoverProductsMarque() {
  


  const x = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: 20 }, () => "Discover Our Products .");

  useAnimationFrame((_, delta) => {
    const speed = 35;

    const width = contentRef.current?.scrollWidth;

    if (!width) return;

    let next = x.get() - (speed * delta) / 1000;

    // half content width reset
    if (next <= -(width / 2)) {
      next = 0;
    }

    x.set(next);
  });
  return (
 <div className="overflow-hidden mt-5 w-[200px]">
      <motion.div
        ref={contentRef}
        style={{ x }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mr-2  shrink-0 text-sm uppercase tracking-[0.1em] text-gray-400"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default DiscoverProductsMarque