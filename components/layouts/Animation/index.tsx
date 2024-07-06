'use client';

import { motion } from 'framer-motion';
import { tv, type VariantProps } from 'tailwind-variants';

const animation = tv({
  variants: {
    fullScreen: {
      true: 'h-full w-full',
    },
  },
});

type AnimationVariants = Required<VariantProps<typeof animation>>;

type Props = {
  children: JSX.Element | JSX.Element[];
  fullScreen?: AnimationVariants['fullScreen'];
};

export const Animation = ({ children, fullScreen = true }: Props) => {
  const childComponents = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={animation({ fullScreen })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.1 }}
    >
      {childComponents}
    </motion.div>
  );
};
