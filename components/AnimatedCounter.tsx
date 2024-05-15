"use client";
import CountUp from "react-countup";

export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," decimals={2} duration={2} prefix="R" end={amount} />
    </div>
  );
};
