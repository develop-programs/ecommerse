import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

export default function HomeBanner() {
  return (
    <div className="w-full">
      <div className="w-full flex gap-2 justify-stretch">
        <div className="flex-1">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {[
                "./images/Xbox_console_banner.png",
                "./images/Xbox_controller_banner.png",
                "./images/airPods_banner.png",
              ].map((item: string | undefined, index: number) => (
                <CarouselItem key={index} className="w-full">
                  <img
                    src={item}
                    alt="banners"
                    className="w-full aspect-auto"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-col gap-2">
          {["./images/Offer3.webp", "./images/flipbuds_banner.png"].map(
            (item: string | undefined, index: number) => (
              <img
                key={index}
                src={item}
                alt="banners"
                className="w-full h-full"
                width={1280}
                height={720}
              />
            )
          )}
        </div>
      </div>
      <div>
        <img
          src="./images/Features.png"
          alt=""
          className="w-full aspect-auto"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
