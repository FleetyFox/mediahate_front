import React from "react";

const PlatformsSection = () => {
  return (
    <section id="streaming-platforms">
      <h2
        class="section-title"
        data-sal="slide-right"
        style={{'--sal-duration' :'.8s'}}

        data-sal-easing="easeOutCubic"
      >
        Твои треки на всех площадках
      </h2>
      <div class="section-content">
        <div class="container">
          <div class="streaming-platforms d-flex flex-column flex-md-row justify-content-around">
            <a href="">
              <img src="/img/platforms/apple.png" alt="Apple Music" />
            </a>
            <a href="">
              <img src="/img/platforms/spotify.png" alt="Sptofify" />
            </a>
            <a href="">
              <img src="/img/platforms/vk.png" alt="VK" />
            </a>
            <a href="">
              <img src="/img/platforms/yandex.png" alt="Yandex Music" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
