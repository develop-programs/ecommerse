import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
export default function Categories() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {[
          "/images/computer.png",
          "/images/earphones.png",
          "/images/headset.png",
          "/images/console.png",
          "/images/keyboard.png",
          "/images/phones.png",
          "/images/gamepad.png",
        ].map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
          >
            <div className="size-32 aspect-square grid place-content-center select-none">
              <img
                src={item}
                alt={item}
                width={300}
                height={300}
                className="w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
