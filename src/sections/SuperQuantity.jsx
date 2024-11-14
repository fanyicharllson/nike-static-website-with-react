import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuantity = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super</span> 
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.lorem10
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.lorem10
        </p>

        <div className="mt-11">
        <Button label="View details" />
        </div>

      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8"width={570} height={522} className="object-contain" />

      </div>
    </section>
  );
};

export default SuperQuantity;
