declare module "framer-motion" {
  import * as React from "react";
  
  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    whileInView?: any;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
  }

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      JSX.IntrinsicElements[K] & AnimationProps & React.RefAttributes<any>
    >;
  };

  export const AnimatePresence: React.FC<{
    children: React.ReactNode;
    mode?: "wait" | "sync" | "popLayout";
    initial?: boolean;
    custom?: any;
    onExitComplete?: () => void;
  }>;

  export function useInView(
    ref: React.RefObject<Element>,
    options?: {
      once?: boolean;
      margin?: string;
      amount?: number | "some" | "all";
    }
  ): boolean;

  export function useAnimation(): any;
  export function useMotionValue(initial: any): any;
  export function useTransform(...args: any[]): any;
  export function useScroll(options?: any): any;
}

