import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="cursor-pointer">
            <img src={footerLogo} alt="logo" width={150} height={46}   />
          </a>
          <p className="mt-6 text-base leading-7 font-palanquin text-white-400 sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            excepturi commodi cupiditate sapiente consequuntur doloribus ipsa
            deserunt consequatur, quae illum?
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} className="cursor-pointer hover:bg-violet-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 gap-20 flex-wrap justify-between lg:gap-10">
          {footerLinks.map((section, index) => (
            <div className="" key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">{section.title}</h4>
              <ul>

                {section.links.map((link, index) => (
                  <li key={index} className="mt- text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href="">{link.name}</a>
                  </li>
                ))}

                
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copy right Sign" width={20} height={20} className="rounded-full m-0"/>

            <p >Copyright. All rights reserved</p>
            <p className="font-montserrat cursor-pointer">Terms and Condition</p>
          </div>

      </div>
    </footer>
  );
};

export default Footer;