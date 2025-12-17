"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const Card = ({
  className,
  image,
  children,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-[350px] h-[400px] cursor-pointer bg-neutral-900 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] border border-gray-200/80 flex flex-col items-center justify-center text-center p-4",
        className
      )}
    >
      {image && (
        <div className="w-80 h-80 rounded-xl shadow-lg mb-4">
          <img
            src={image}
            alt="card"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      {children && (
        <div className="flex flex-col items-center justify-center gap-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface CardData {
  image: string;
  title: string;
  description: string;
}

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 40,
  rotationAngle = 5,
  animationDelay = 0.1,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const limitedCards = cards.slice(0, 3);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[350px] h-[415px]">
        {limitedCards.map((card, index) => {
          const isFirst = index === 0;

          let xOffset = 0;
          let rotation = 0;

          if (limitedCards.length > 1) {
            if (index === 1) {
              xOffset = -spreadDistance;
              rotation = -rotationAngle;
            } else if (index === 2) {
              xOffset = spreadDistance;
              rotation = rotationAngle;
            }
          }

          return (
            <motion.div
              key={index}
              className={`absolute ${isFirst ? "z-20" : "z-10"}`}
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: isHovering ? xOffset : 0,
                rotate: isHovering ? rotation : 0,
                zIndex: isFirst ? 10 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * animationDelay,
                type: "spring",
              }}
              {...(isFirst && {
                onHoverStart: () => setIsHovering(true),
                onHoverEnd: () => setIsHovering(false),
              })}
            >
              <Card
                className={isFirst ? "z-10 cursor-pointer" : "z-0"}
                image={card.image}
              >
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, Card };
