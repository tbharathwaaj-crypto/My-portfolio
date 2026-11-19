import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

export function Reveal({ children, className = "", delay = 0, style, onMouseEnter, animateOnMount = false }: PropsWithChildren<{ className?: string; delay?: number; style?: CSSProperties; onMouseEnter?: MouseEventHandler<HTMLDivElement>; animateOnMount?: boolean }>) {
  const reducedMotion = useReducedMotion();
  const canRevealOnScroll = typeof window !== "undefined" && "IntersectionObserver" in window;
  const shouldAnimate = !reducedMotion;
  return (
    <motion.div
      className={`reveal ${className}`}
      style={style}
      onMouseEnter={onMouseEnter}
      initial={reducedMotion || (!canRevealOnScroll && !animateOnMount) ? false : { opacity: 0, y: 18 }}
      animate={animateOnMount && shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!animateOnMount && shouldAnimate && canRevealOnScroll ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
