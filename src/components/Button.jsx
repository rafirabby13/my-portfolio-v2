/* eslint-disable react/prop-types */
import { ImDownload } from "react-icons/im";

const Button = ({text, size}) => {
    console.log(size)
  return (
    <div>
      <button>
        
        <a
          download={true}
          href="Resume_Of_Rafi_Ahmed_Fullstack _developer.pdf.pdf"
          className={ ` border-[#E80F88] md:text-3xl font-semibold px-1 md:px-5 py-2 rounded-lg hover:bg-[#E80F88] border-l-[#E80F88] border-l-[5px] hover:text-white transition duration-200 shadow shadow-[#E80F88] animate__fadeInUp animate__animated animate__delay-2s  animate__slower flex gap-3
            `}
        >
        <ImDownload />  {text}
        </a>
      </button>
    </div>
  );
};

export default Button;
