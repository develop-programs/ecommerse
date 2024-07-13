import Footer from "@/components/custom/Footer";
import Navigation from "@/components/Navigation";

export default function Cart() {
  return (
    <section aria-label="Cart">
      <section aria-label="Navigation">
        <Navigation />
      </section>
      <section aria-label="main_section">
        <div className="w-full h-[calc(100vh-11rem)]">
          <div className="container grid grid-cols-2">
            <div aria-label="all_products"></div>
            <div aria-label="order_summary"></div>
          </div>
        </div>
      </section>
      <section aria-label="Footer">
        <Footer />
      </section>
    </section>
  );
}
