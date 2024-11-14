 import {PropTypes} from 'prop-types'
 import { star } from '../assets/icons';
 
 const PopularProductCard = ({ imgURL, name, price }) => {
   // ... previous code remains the same

   return (
     <div className="flex flex-1 flex-col w-full max-sm:w-full">
       <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

       <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat leading-norma text-slate-gray text-xl'>(4.5)</p>
       </div>
       <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
       <p className='mt-2 font-semibold text-coral-red leading-normal font-montserrat text-2xl'>{price}</p>

     </div>
   );
 };

 PopularProductCard.propTypes = {
   imgURL: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   price: PropTypes.string
 };

 export default PopularProductCard;