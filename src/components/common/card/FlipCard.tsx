"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn(
        // ✅ responsive card sizing
        "group [perspective:1000px]",
        "w-[90vw] max-w-[360px] sm:w-[360px] lg:w-[400px] xl:w-[440px]",
        "h-[420px] sm:h-[460px] lg:h-[500px] xl:h-[540px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* ---------- Front ---------- */}
        <div className="absolute h-full w-full [backface-visibility:hidden] overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-90"
          />

          {/* Front overlay */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 text-center",
              "bg-gradient-to-t from-black/85 via-black/40 to-transparent",
              "p-4 sm:p-5 lg:p-6"
            )}
          >
            <h2 className="font-bold text-white tracking-wide text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-1 text-gray-300 line-clamp-2 text-xs sm:text-sm lg:text-base 2xl:text-lg">
                {subtitle}
              </p>
            )}

            <p className="mt-2 font-semibold tracking-widest text-sand opacity-80 group-hover:opacity-100 transition text-[10px] sm:text-xs lg:text-sm">
              Click for more info →
            </p>
          </div>
        </div>

        {/* ---------- Back ---------- */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 text-slate-200 [backface-visibility:hidden]",
            "overflow-y-auto",
            "p-4 sm:p-5 lg:p-6",
            self[1]
          )}
        >
          <div className="flex min-h-full flex-col gap-2 text-center">
            <h1 className="font-bold text-clay text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
              {title}
            </h1>

            <p className="mt-1 border-t border-t-gray-700 pt-3 font-medium leading-relaxed text-gray-100 whitespace-pre-line text-sm sm:text-base lg:text-lg 2xl:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}