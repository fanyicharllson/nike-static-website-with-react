import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">What Our
        <span className="text-coral-red">Customers  </span>
        Says?
      </h3>
      <p className="info-text m-auto text-center max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti.</p>

      <div className="mt-24 flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} ratings={review.rating} feedback={review.feedback} />
        ))}

      </div>

    </section>
  )
}

export default CustomerReviews