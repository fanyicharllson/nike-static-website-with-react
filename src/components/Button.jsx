import PropTypes from "prop-types";

const Button = (props) => {
    return (

        <button className={`flex justify-center items-center g-2 px-7 py-4 border font-montserrat leading-none hover:bg-orange-700 transition-colors

      ${props.backgrounColor ? `${props.backgrounColor} ${props.textColor} ${props.borderColor}` : "text-lg bg-coral-red rounded-full   text-white border-coral-red"} rounded-full w-full"} ${props.fullWidth && 'w-full'}`}>

            {props.label}

            {props.iconURL && <img src={props.iconURL} alt="arrow right icon" className="w-5 h-5 rounded-full ml-2"/>}
        </button>



    )
}

Button.propTypes = {
    label: PropTypes.string,
    iconURL: PropTypes.string,
}

export default Button