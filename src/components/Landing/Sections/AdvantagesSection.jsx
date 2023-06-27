import React from "react";

const AdvantagesSection = () => {
  return (
    <section id="advantages">
      <div className="container">
        <h2
          class="section-title"
          data-sal="slide-right"
          style={{'--sal-duration' :'.8s'}}
          data-sal-easing="easeOutCubic"
        >
          О нас
        </h2>
        <div className="section-content">
          <div class="d-flex flex-md-row flex-column justify-content-center fs-5 fw-bold">
            <div class="card underline-animation">
              <div class="card-body d-flex flex-column text-center">
                <span class="accent-text">1500+</span> загруженных треков
              </div>
            </div>
            <div class="card underline-animation">
              <div class="card-body d-flex flex-column text-center">
                <span class="accent-text">3+</span> саб лейбла
              </div>
            </div>
            <div class="card underline-animation">
              <div class="card-body d-flex flex-column text-center">
                <span class="accent-text">1100+</span> доставленных релизов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
