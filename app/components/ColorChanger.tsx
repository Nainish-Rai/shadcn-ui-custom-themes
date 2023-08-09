"use client";
import React, { useEffect, useState } from "react";
import { HslaColor, HslaColorPicker } from "react-colorful";
import "./ColorChanger.css";
import { motion, AnimatePresence } from "framer-motion";
type Props = {
  variable: string;
};

function ColorChanger({ variable }: Props) {
  const [defaultColor, setDefaultColor] = useState<String>("");

  const [defaultValues, setDefaultValues] = useState<number[]>();

  const [color, setColor] = useState<HslaColor>();
  console.log(color);

  useEffect(() => {
    const defaultColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(variable);
    setDefaultColor(defaultColor);

    const floatRegex = /[-+]?\d*\.\d+|\d+/g;
    const list = defaultColor?.match(floatRegex)!.map(parseFloat);
    setDefaultValues(list);
    defaultValues &&
      setColor({
        h: defaultValues[0],
        s: defaultValues[1],
        l: defaultValues[2],
        a: defaultValues[3],
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variable]);
  useEffect(() => {
    color != undefined &&
      document.documentElement.style.setProperty(
        variable,
        `${color.h}, ${color.s}%, ${color.l}%, ${color.a}`
      );
  }, [color, variable]);

  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 duration-150">
      <h1
        onClick={() => setActive((prev) => !prev)}
        className="font-medium text-xl"
      >
        {variable}
      </h1>
      {color && (
        <div
          className="w-4 h-4 aspect-square rounded"
          style={{
            backgroundColor: `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`,
          }}
        ></div>
      )}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="your-component "
          >
            <HslaColorPicker color={color} onChange={setColor} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ColorChanger;
