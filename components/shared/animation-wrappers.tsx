"use client";

import { type CSSProperties } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useTime } from "framer-motion";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  rotateTime?: number;
};

export const Rotate = ({
  children,
  className,
  style,
  rotateTime,
}: WrapperProps) => {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, rotateTime || 10000], // For every 15 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return <motion.div style={{ rotate }}>{children}</motion.div>;
};
