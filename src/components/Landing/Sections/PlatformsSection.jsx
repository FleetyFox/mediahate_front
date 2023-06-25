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
            <a href="https://music.apple.com">
              <img src="/img/platforms/apple.png" target="_blank" alt="Apple Music" />
            </a>
            <a href="https://open.spotify.com/">
              <img src="/img/platforms/spotify.png" target="_blank" alt="Sptofify" />
            </a>
            <a href="https://music.vk.com/">
              <img src="/img/platforms/vk.png" target="_blank" alt="VK" />
            </a>
            <a href="https://music.yandex./">
              <img src="/img/platforms/yandex.png" target="_blank" alt="Yandex Music" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
