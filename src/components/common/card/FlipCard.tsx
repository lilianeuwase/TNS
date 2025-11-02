"use client";
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
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-80 w-64 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
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
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
            <h2 className="text-lg font-bold text-white tracking-wide">{title}</h2>
            {subtitle && (
              <p className="text-xs text-gray-300 mt-1 line-clamp-2">{subtitle}</p>
            )}
          </div>
        </div>

        {/* ---------- Back ---------- */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden] overflow-y-auto",
            self[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-2 text-center">
            <h1 className="text-lg font-bold text-clay">{title}</h1>
            <p className="mt-1 border-t border-t-gray-700 pt-3 text-sm font-medium leading-relaxed text-gray-100 whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}