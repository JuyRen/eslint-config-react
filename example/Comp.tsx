/* eslint-disable import/no-extraneous-dependencies */
import type { MutableRefObject } from "react";
import { useEffect, useState } from "react";

import appPng from "@assets/app.png";

import timeSvg from "./assets/icons/time.svg";
import myData from "./data.json";
import time from "./promise";

interface Props {
  name: string;
  age: number;
}
const Ref: MutableRefObject<number> = { current: 1 };
console.log("Ref: ", Ref);

const a = undefined;

const data = [
  [
    {
      name: 1,
      age: 2,
    },
  ],
];

data.forEach((item) => {
  item.map((item) => {
    console.log(item.age);
  });
});

function Comp({ name, age }: Props) {
  const [number, setNumber] = useState();

  useEffect(() => {
    console.log(number);
  }, [number]);

  return <div style={{ color: "red" }}>1</div>;
}

export default Comp;
