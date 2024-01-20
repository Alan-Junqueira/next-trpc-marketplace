import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

interface IImageSliderProps extends ComponentProps<"div"> {
  urls: string[];
}

export const ImageSlider = ({
  urls,
  className,
  ...props
}: IImageSliderProps) => {
  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inactiveStyles = " hidden text-gray-400";
  return (
    <div
      className={cn(
        "group relative aspect-square overflow-hidden rounded-xl bg-zinc-100",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-10 opacity-0 transition group-hover:opacity-100">
        <button></button>
        <button></button>
        <Swiper className="h-full w-full">
          {urls.map((url, index) => (
            <SwiperSlide key={index} className="relative -z-10 h-full w-full">
              <Image
                fill
                loading="eager"
                src={url}
                className="-z-10 h-full w-full object-cover object-center"
                alt="Product Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
