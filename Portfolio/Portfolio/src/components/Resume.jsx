import { useRef } from "react";
import pdf from "../pdf/FS_Resume.pdf";

const Resume = () => {
  const typedRef = useRef(null);

  return (
    <>

        <div className="left" data-aos="fade-up-right" data-aos-duration="100">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="FS_Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>

    </>
  );
};

export default Resume;