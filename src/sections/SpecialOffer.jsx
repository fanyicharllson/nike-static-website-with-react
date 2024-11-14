import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={683} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <br />
          <span className="text-coral-red px-2">Special</span> 
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, assumenda saepe. Quod rerum maxime quisquam, sit molestiae veniam? Ea blanditiis a nihil, rem expedita deleniti incidunt enim consequatur hic.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nemo animi eum maxime unde voluptatem nobis minima tempore debitis deserunt!
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" iconURL={arrowRight} />
        <Button label="Learn More" backgroundColor = "bg-white" textColor = "text-slate-gray" borderColor = "bg-white"/>
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer