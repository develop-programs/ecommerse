import HomeBanner from "@/components/custom/HomeBanner";
import Categories from "@/components/custom/Categories";
import Footer from "@/components/custom/Footer";
import BlackFridayBanner from "../components/Banners/Black_Friday_Banner";
import Navigation from "../components/Navigation";
import CustomCards from "@/components/custom/CustomCards";
import Preview from "@/components/custom/Preview";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";

export default function App() {
  return (
    <main>
      <section className="offer-section">
        <BlackFridayBanner />
      </section>
      <section aria-label="main_section">
        <section aria-label="Navigation_Section">
          <div>
            <Navigation />
          </div>
          <div></div>
        </section>
        <section aria-label="Promotion" className="py-6">
          <div className="container">
            <HomeBanner />
          </div>
        </section>
        <section aria-label="best-deals" className="py-6">
          <div className="container grid grid-cols-8 gap-4">
            <div className="col-span-8 flex items-center gap-12">
              <span className="text-2xl font-black">Best Deals</span>
              <div className="flex gap-2 items-center">
                <span>ends in</span>
                <div className="w-60 h-12 bg-orange-500"></div>
              </div>
            </div>
            <div className="col-span-2">
              <Card>
                <CardContent className="relative p-4 space-y-4">
                  <div
                    className="absolute top-0 left-0 flex flex-col gap-2 p-2"
                    aria-label="tags"
                  >
                    <div className="bg-yellow-500 px-3 py-1 rounded-md">
                      <span className="font-bold">32% OFF</span>
                    </div>
                    <div className="bg-rose-500 px-3 font-bold py-1 w-16 text-white rounded-md">
                      HOT
                    </div>
                  </div>
                  <img
                    src="./eb9dcd04-c013-4770-a45c-d88b42b66419.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="grid gap-3">
                    <span className="text-lg font-bold">
                      Xbox Series S - 512GB SSD Console with Wireless Controller
                      - EU Versio...
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      $442.12
                    </span>
                    <span className="font-semibold text-slate-500">
                      Games built using the Xbox Series X|S development kit
                      showcase unparalleled load times, visuals.
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Button variant="ghost" size="icon" className="text-2xl">
                      ❤️
                    </Button>
                    <Button className="w-full  py-6 bg-orange-600 hover:bg-orange-600/90 text-lg text-white">
                      🛒 Add to Cart
                    </Button>
                    <Button variant="ghost" size="icon" className="text-2xl">
                      👁️
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-6">
              <CustomCards Tabs={false} />
            </div>
          </div>
        </section>
        <section aria-label="categories" className="py-6">
          <div className="container space-y-12">
            <p className="text-center font-bold text-2xl">
              Shop with Categories
            </p>
            <Categories />
          </div>
        </section>
        <section aria-label="featured-products" className="py-6">
          <div className="container grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <Card className="w-full">
                <CardContent className="h-[40rem]">
                  <img
                    src="./images/featured_banner.png"
                    width={150}
                    height={300}
                    className="w-full h-full aspect-auto"
                    loading="lazy"
                    decoding="async"
                    alt="banner"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="col-span-6">
              <CustomCards
                Tabs={true}
                TabTitle={[
                  "All Products",
                  "Consoles",
                  "Gamepads",
                  "Headsets",
                  "Keyboards",
                  "Mouse",
                ]}
              />
            </div>
          </div>
        </section>
        <section aria-label="promotion" className="py-6">
          <div className="container flex md:flex-col xl:flex-row">
            {["./images/Banner.png", "./images/Frame 14.png"].map(
              (item: string, index: number) => (
                <img
                  src={item}
                  key={index}
                  width={1920}
                  height={1080}
                  className="w-full"
                  alt=""
                />
              )
            )}
          </div>
        </section>
        <section aria-label="featured-products" className="py-6"></section>
        <section aria-label="promotion" className="py-6">
          <div className="container">
            <img
              src="./images/macBook_banner.png"
              width={1920}
              height={1080}
              className="w-full object-cover"
              alt="promotional_banner"
            />
          </div>
        </section>
        <section aria-label="products_section-4" className="py-6">
          <div className="container grid grid-cols-4"></div>
        </section>
        <section aria-label="news" className="py-6">
          <div className="container"></div>
        </section>
        <section aria-label="footer">
          <Footer />
        </section>
      </section>
      <Preview />
    </main>
  );
}
