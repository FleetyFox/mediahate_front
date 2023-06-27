import Link from "next/link";
import React from "react";

const MainSection = () => {
  return (
    <section id="hero">
      <div className="container-fluid text-center">
        <video autoPlay loop muted>
          <source
            src="https://v4.cdnpk.net/videvo_files/video/free/video0464/large_watermarked/_import_6118a38c686ba1.87776016_FPpreview.mp4"
            type="video/mp4"
          />
        </video>
        <h1
          className="hero-title mb-4"
          data-sal="zoom-in"
          style={{ "--sal-duration": ".4s" }}
          data-sal-easing="easeOutCubic"
        >
          <span className="accent-text">mediahate</span> label
        </h1>
        <p className="lead mb-5"
                  data-sal="zoom-in"
                  style={{ "--sal-duration": ".8s" }}
                  data-sal-easing="easeOutCubic"
        
        >
          союз артистов, нацеленный на политику против «рабства» других артистов
        </p>

        <Link href="/sendform"  class="btn btn-outline-white btn-rotate btn-lg">
          Выпустить трек
        </Link>
      </div>
    </section>
  );
};

export default MainSection;
