import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm';

function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container col-xxl-8 px-4 py-5 flex justify-center">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 w-[90%]">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="../images/hero@2x.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
        </div>
        <div className="col-lg-6 gap-[20px] flex-col flex">
          <h1 className="display-5 lh-1 mb-3 uppercase font-semibold font-cormorant-sc text-redish text-3xl leading-110 tracking-[0] md:text-4xl">Award Winning</h1>
          <h1 className="display-5 font-bold text-body-emphasis lh-1 mb-3 uppercase font-cormorant-sc text-[#000000] tracking-[0] text-4xl leading-80 md:text-6xl">Digital Marketing Agency</h1>
          <p className="lead font-poppins font-normal text-base text-[#000000] tracking-[0] leading-30 md:text-lg">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-[3%]">
            <button type="button" className="btn btn-primary btn-lg px-8 active:bg-red-500 uppercase hover:bg-red-400 py-3 me-md-2 bg-redish border-none font-poppins font-semibold text-sm text-white tracking-[100] leading-26" onClick={handleShowForm}>Contact Us</button>
          </div>
        </div>
      </div>
      <ContactForm show={showForm} onClose={handleCloseForm} />
    </div>
  );
}

export default HeroSection;