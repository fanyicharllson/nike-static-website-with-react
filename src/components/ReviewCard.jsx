import { star } from "../assets/icons"

const ReviewCard = ({imgURL, ratings, feedback, customerName}) => {
  return (
   
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full w-[120px] object-cover h-[120px]" />
   
    <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
    <div className="mt-3 justify-center items-center gap-2.5">
        <img src={star} alt="" width={24} height={24} className="m-0 object-contain" />
        <p className="text-xl font-montserrat text-slate-gray">({ratings})</p>
    </div>
    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
   
  )
}

export default ReviewCard