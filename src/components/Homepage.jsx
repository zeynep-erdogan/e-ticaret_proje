import Blog from './homePage/Blog';
import Carousel from './homePage/Carousel';
import Category from './homePage/Category';
import Fluid from './homePage/Fluid';
import Hero from './homePage/Hero';
import Product from './homePage/Product';

function Homepage() {
  return (
    <>
      <section className="">
        <Hero />
        <Category />
        <Product />
        <Carousel />
        <Fluid />
        <Blog />
      </section>
    </>
  );
}

export default Homepage;
