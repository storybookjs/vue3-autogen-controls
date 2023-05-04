import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva([], {
  variants: {
    tag: {
      h1: ["font-Rubik", "text-[32px]", "font-bold"],
      h2: ["font-Rubik", "text-[24px]", "font-bold"],
      h3: ["font-Rubik", "text-[20px]", "font-bold"],
      h4: ["font-Rubik", "text-[18px]", "font-bold"],
      p: ["font-Rubik", "font-normal", "text-[16px]"],
      p_bold: ["font-Rubik", "font-bold", "text-[16px]"],
    },
  },
  defaultVariants: {
    tag: "p",
  },
});

export interface TextVariants extends VariantProps<typeof textVariants> {}
