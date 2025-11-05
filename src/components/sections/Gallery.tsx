"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import WaveReveal from "@/components/common/wave-reveal";
import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          <WaveReveal
            duration="1000ms"
            className="items-start justify-start text-xl sm:text-2xl md:text-6xl"
            text={item.title}
            direction="up"
          />
        </div>
      )}
    </div>
  );
};

const items = [
  {
    image: "/images/WaterFall.jpg",
    title: "WaterFalls - Nyungwe",
  },
  {
    image: "/images/Bisoke.jpg",
    title: "Climb the Clouds — Mount Bisoke",
  },
  // {
  //   image: "/images/Canopy.webp",
  //   title: "Walk the Sky — Nyungwe Canopy",
  // },
  {
    image: "/images/Gorillas2.jpg",
    title: "Kinigi",
  },
  {
    image: "/images/Akagera2.jpg",
    title: "Golden Sunrise — Akagera",
  },
  {
    image: "/images/Akagera3.jpg",
    title: "Kigali",
  },
  {
    image: "/images/Rwanda.jpg",
    title: "1000 Hills",
  },
  {
    image: "/images/Chimp.jpg",
    title: "Nature",
  },
];

export default function Expandable({ list = items, autoPlay = true, className }: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleList, setVisibleList] = useState(list);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        //  Small screens → show only first 3
        setVisibleList(list.slice(0, 3));
      } else {
        //  Larger screens → show all
        setVisibleList(list);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [list]);

  //  Autoplay logic (pauses on hover)
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % visibleList.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, visibleList.length, isHovering]);

  return (
    <section id="gallery">
    <div
      className={cn(
        "flex h-[40rem] w-full gap-1 overflow-hidden",
        className,
      )}
    >
      {visibleList.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);   //  pauses autoplay
          }}
          onMouseLeave={() => {
            setIsHovering(false);  //  resumes autoplay
          }}
        />
      ))}
    </div>
      </section>
  );
}