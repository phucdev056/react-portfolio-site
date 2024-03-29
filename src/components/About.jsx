import React from "react";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container section-container">
        <div className="left-side" data-aos="fade-right">
          <div>
            <div>
              <div>
                <div>
                  <img src="https://cdn-gapce.nitrocdn.com/DmXXMIOTdCqHdfLfcciSQZXabTxEDTvX/assets/static/optimized/rev-fa02e4c/wp-content/uploads/2022/07/mikey-e1657283002449-929x1024.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side" data-aos="fade-left">
          <h2>About Me</h2>
          <h4>I have a deep passion for editing, and love bringing visions to life</h4>
          <p>My journey with this art form started at an early age, editing together clips and memories in Windows Movie Maker. A long time has passed since then, and I’ve now been using Adobe Premiere Pro as a professional editor for over five years.</p>
          <p>I have a wide range of experience with many types of edits, so no matter the job you need done, send me the details and we can get it done. My expertise has amassed millions of monthly viewers and built loyal fanbases.</p>          
          <HashLink smooth className="primary-link" to="/#contact">Work with me</HashLink>
        </div>
      </div>
    </section>
  );
};

export default About;
