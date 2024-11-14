import {
  Footer,
  Hero,
  Subscribe,
  SuperQuantity,
  CustomerReviews,
  Services,
  SpecialOffer,
  PopularProducts,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuantity />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding-x py-10">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className=" padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
