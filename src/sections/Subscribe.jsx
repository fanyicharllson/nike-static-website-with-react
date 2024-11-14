import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span> & NewsLetter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-1 rounded-full sm:border-[2px]">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Subscribe@nike.com"
          className="input"
        />

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
