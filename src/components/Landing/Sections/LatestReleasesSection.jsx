import React from "react";

const tempAlbums = [
  {title: 'MEASURE OF A MAN', artist: 'JHuzzy', coverUrl: 'https://sun9-33.userapi.com/impg/5VakqWd_Cbi55LumwjN7ZigWuKoxSI6X9-Jhgw/ko3NLfy-llU.jpg?size=1440x1440&quality=95&sign=66abf0d0bfb0cad948757538f8b01178&type=album', url:''},
  {title: 'THROW IT UP', artist: 'STXTELI, BLOODDIE', coverUrl: 'https://sun9-52.userapi.com/impg/OhvCRRn6_08E1qrOV5uBaPhBo-jaVytX101i_g/n3KVAnnLX3Q.jpg?size=807x807&quality=95&sign=60d0ad2ae714c15050e16bfa1d71be05&c_uniq_tag=ZSDirzFq7ENcH86YFcCmnm5Rc20QIEPS5TR9yea537E&type=album', url:''},
  {title: 'Issues', artist: 'ssxrcazm', coverUrl: 'https://sun9-68.userapi.com/impg/ul2JqwKiIHoWDZ9lgl-qXfmnrPxc2Aw1qIuwiw/l06FZeG9pdY.jpg?size=807x807&quality=95&sign=7de93d5b600dc9b40fc2ae20c133a215&c_uniq_tag=1eL1CsT7oNzEm2zMPpYwgT8FXFX8fASc7jisckY3si0&type=album', url:''},
  {title: 'Suffer', artist: 'Zeqt', coverUrl: 'https://sun9-35.userapi.com/impg/gEwoIRyU8FX4fia5pY5e8xHcgnWuyK0AdT2-ew/X8hOpTlAxMA.jpg?size=807x807&quality=95&sign=a8a4e859b3485b37324c6102229f86a5&c_uniq_tag=wox8SodzJSTjUF1rF_dNA4NvTKspKl5dsRhyxGCR5C4&type=album', url:''},
  {title: 'Tokyo Nights', artist: 'Dr.MadDog', coverUrl: 'https://sun9-42.userapi.com/impg/8IqC3iJFPH7DBELTLZanqK0GuzoyUfiHAIgNjw/-5b-QWLduC0.jpg?size=807x807&quality=95&sign=b2c1546cbb389390ad13e61d47c35616&c_uniq_tag=fSj9FDSpCHAeDcwoh1UTV56MmH8dATv1EIH-KiunFwE&type=album', url:''},
  {title: 'Rest Your Soul', artist: 'SOLIZY', coverUrl: 'https://sun9-23.userapi.com/impg/vEpeAUKepPbz_fq7KwnEz47PYUE0ukEIx6yEmA/8RJR6rl_CjA.jpg?size=807x807&quality=95&sign=c89b01bc430122eda6114f343d41f7a3&c_uniq_tag=lVPnTm-iZRyHG_pcZjmbSKvR62qH0z67VaNmxxzJB7w&type=album', url:''},
  {title: 'ZION', artist: 'JHuzzy', coverUrl: 'https://sun9-26.userapi.com/impg/bFMuPKR48CNLYxFXvZbulqt1ACkKcCpXMsH0TQ/9s7p7wW5VHg.jpg?size=807x807&quality=95&sign=8458ebfe827be2e38460c966af6f8002&c_uniq_tag=F03FCeogwxkU9xOAkeQGs5M12820SYL2Sf3HVQak-Co&type=album', url:''},
  {title: 'DRUG GAME', artist: 'KE PLAYA', coverUrl: 'https://sun9-7.userapi.com/impg/IQs23RyswnI9TziVbhZOPwlBZO1WYZO1i82D5g/PWxkC3O4pvg.jpg?size=807x807&quality=95&sign=759b620f92e65f320f156ff0cca6f2c7&c_uniq_tag=TzwQyJG7O8sSk2XC4vWNOcco0aZPj4uAR7jpD2_-YHw&type=album', url:''},
]


const LatestReleasesSection = () => {
  return (
    <section id="releases">
      <h2
        class="section-title"
        data-sal="slide-right"
        style={{ "--sal-duration": ".8s" }}
        data-sal-easing="easeOutCubic"
      >
        Популярные релизы
      </h2>
      <div class="section-content">
        <div class="container">
          <div class="row">
            {tempAlbums.map( item => {
              return (
                <div class="col-md-3 col-12">
                <a class="d-block text-decoration-none" href="#">
                  <div
                    class="card"
                    data-sal="zoom-in"
                    style={{ "--sal-duration": "1.5s  " }}
                    data-sal-easing="easeOutCubic"
                  >
                    <img
                      src={item?.coverUrl}
                      alt={item.title}
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <div class="album-title">{item.title}</div>
                      <div class="album-artist">{item.artist}</div>
                    </div>
                  </div>
                </a>
              </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestReleasesSection;
