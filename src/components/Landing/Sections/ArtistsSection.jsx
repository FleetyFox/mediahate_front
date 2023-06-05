import React from "react";

const tempArtists = [
  {
    artist: "PANICX",
    avatarUrl:
      "https://sun9-3.userapi.com/impg/eAPjMjfAJvff0KPgn1z3A9EF5raXbiLL2lPTTA/dBqQlPdZAhA.jpg?size=2560x2560&quality=95&sign=f2cca0e39cd6dfdd6b3b62aef641ee6a&type=album",
    linkUrl:
      "https://open.spotify.com/artist/10YuCxpdt8MPz5L2SxiYlx?si=f5d1dd32b038419e",
  },
  {
    artist: "SMITHMANE",
    avatarUrl:
      "https://sun9-33.userapi.com/impg/zNzooxHiTMODqoPshiK5cOD6wlG9DqMVMW7Nwg/ylHhzgyMcXc.jpg?size=736x736&quality=95&sign=3711797c2358dcae585d31f1513315c2&type=album",
    linkUrl:
      "https://open.spotify.com/artist/5WOke44Ea57bHmJ3X0qluG?si=9555498fdc844189",
  },
  {
    artist: "74blade | 79NIGHTS",
    avatarUrl:
      "https://sun9-54.userapi.com/impg/OQlhG1b_R6w5MLOJxo170yAZAvkNYvtcSzJmJQ/7PxY0Zoobe4.jpg?size=2560x2560&quality=95&sign=faf3a3226a2688419e638e4be0ab9529&type=album",
    linkUrl:
      "https://open.spotify.com/artist/07CoGyrUbcBkSzvs1Kd9i6?si=UHqlNK3VQbqa1Gy155bB9Q&nd=1",
  },
  {
    artist: "DJ XBOX360 / APATHETIC D",
    avatarUrl:
      "https://sun9-71.userapi.com/impg/QPYxlJAt7FpC38nYCwac5cIPb7V1JuQdPzTaPw/FcYaP63prVU.jpg?size=1501x2160&quality=95&sign=f15bb91f9ec3f7ec605b0d63f4153231&type=album",
    linkUrl:
      "https://open.spotify.com/artist/7KndNWOymXIAJZDOBdgiT1?si=c7a9fca99a574061",
  },
  {
    artist: "KXZVMY | 79NIGHTS",
    avatarUrl:
      "https://sun9-70.userapi.com/impg/7RdLwXfHIY_WiVOUo6A_qmkz-qU3zTHQRqnInA/NlQw3YnAb8g.jpg?size=1000x1000&quality=95&sign=411c03b4a7bfc6c8b450219dd312c253&type=album",
    linkUrl:
      "https://open.spotify.com/artist/6NmROQZHJ8V0T4WOU4hRr6?si=8b359fffcd7340e0",
  },
  {
    artist: "HØWL",
    avatarUrl:
      "https://sun9-19.userapi.com/impg/0q5vvT9Rx9vsMM8PJ00spQnvubNEVE56xI-PQw/jyhj9Wxp4Us.jpg?size=2560x1440&quality=95&sign=6e9967bad37fda75b782a61014b6849d&type=album",
    linkUrl:
      "https://open.spotify.com/artist/3K9gJoPHRzTItBu63NEpnd?si=33faf3738bdb4f60",
  },
];

const ArtistsSection = () => {
  return (
    <section id="artists">
      <div class="section-title">С нами работают</div>
      <div class="section-content">
        <div class="container">
          <div class="row justify-content-center">
            {tempArtists.map((item) => {
              return (
                <a
                  class="col-md-2 col-6 text-center d-flex flex-column align-items-center text-decoration-none text-white"
                  href={item?.linkUrl}
                  target="_blank"
                >
                  <img
                    src={item.avatarUrl}
                    style={{
                      objectFit: "cover",
                      width: "120px",
                      height: "120px",
                    }}
                    class="rounded-circle d-block p-3"
                    alt=""
                  />
                  <h4>{item.artist}</h4>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
