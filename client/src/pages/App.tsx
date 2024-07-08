import HomeBanner from "@/components/custom/HomeBanner";
import Categories from "@/components/custom/Categories";
import Footer from "@/components/custom/Footer";
import BlackFridayBanner from "../components/Banners/Black_Friday_Banner";
import Navigation from "../components/Navigation";

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
          <div className="container flex gap-12 items-center py-4">
            <div className="text-2xl font-bold">Best Deals</div>
            <div className="flex gap-2 items-center">
              <span className="text-base text-slate-600 font-semibold">
                Deals ends in
              </span>
              <div className="w-52 h-10 bg-yellow-600"></div>
            </div>
          </div>
          <div className="container flex gap-4">
            <div className="w-96 h-[35rem] border border-slate-800"></div>
            <div className="flex-1 grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-full border border-slate-700"
                />
              ))}
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
          <div className="container grid grid-cols-4 gap-4">
            <div className="w-80 h-[35rem] border">
              <img
                src="./images/featured_banner.png"
                alt="promotional_banner"
                width={1920}
                height={1080}
                className="w-full h-full aspect-video"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-span-3 grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-full border border-slate-700"
                />
              ))}
            </div>
          </div>
        </section>
        <section aria-label="promotion" className="py-6">
          <div className="container flex">
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
        <section aria-label="featured-products" className="py-6">
          <div className="container grid grid-cols-4 gap-4">
            <div className="w-80 h-[35rem] border">
              <img
                src="./images/featured_banner.png"
                alt="promotional_banner"
                width={1920}
                height={1080}
                className="w-full h-full aspect-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-span-3 grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-full border border-slate-700"
                />
              ))}
            </div>
          </div>
        </section>
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
    </main>
  );
}
