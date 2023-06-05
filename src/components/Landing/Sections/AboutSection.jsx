import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div class="container-fluid">
        <h2
          class="section-title"
          data-sal="slide-right"
          style={{'--sal-duration' :'.8s'}}
          data-sal-easing="easeOutCubic"
        >
          Почему мы
        </h2>
        <div class="section-content">
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>
                  <i class="bi bi-plus-lg"></i>
                  <span>
                    Самый маленький срок действия лицензионного договора на всем
                    музыкальном рынке - 1 год
                  </span>
                </li>
                <li>
                  <i class="bi bi-plus-lg"></i>
                  <span>Предоставление промо - поддержки</span>
                </li>
                <li>
                  <i class="bi bi-plus-lg"></i>
                  <span>Посевы по TikTok и YouTube каналам</span>
                </li>
                <li>
                  <i class="bi bi-plus-lg"></i>
                  <span>Выдача личного кабинета у дистрибьютора</span>
                </li>
                <li>
                  <i class="bi bi-plus-lg"></i>
                  <span>
                    Команда из 3-х человек, которая прикрепляется к артисту
                  </span>
                </li>
                <li>
                  <i class="bi bi-plus-lg"></i>
                  <span>Ежеквартальная отчетность</span>
                </li>
              </ul>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center img-fluid"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
