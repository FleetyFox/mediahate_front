import React from "react";

const tempAlbums = [
  {title: 'LEAVE DA SPOT', artist: '42PATH', coverUrl: 'https://i.scdn.co/image/ab67616d0000b273e1f18e5c5e4797124aa7724a', url:'https://open.spotify.com/album/18jcPogUmCGkOjuekZuNqT'},
  {title: 'WARRIXRS', artist: 'REDFXRD', coverUrl: 'https://i.scdn.co/image/ab67616d0000b273c1fdf78472001a75b1ef1a85', url:'https://open.spotify.com/album/4gxr7fX4qSIHtYBj2Byp5v'},
  {title: 'WINDRANGER', artist: 'SXORPUS', coverUrl: 'https://i.scdn.co/image/ab67616d00001e02a02b74001dbf0093b185b9ea', url:'https://open.spotify.com/album/1p10zMR7d7xBHL2ecSN6Fk'},
  {title: 'Make a Move', artist: 'PANICX', coverUrl: 'https://i.scdn.co/image/ab67616d00001e0211abad7451c991444afe3e0b', url:'https://open.spotify.com/album/7xic70FK4Q4QM82nAXFctw'},
  {title: 'Alien Shooter', artist: 'CARNAL HOODS', coverUrl: 'https://i.scdn.co/image/ab67616d00001e024fb5cc53814a3db90d48fa26', url:'https://open.spotify.com/album/5x20tpRa7LwKqxryjIofO9'},
  {title: 'Butterfly Effect', artist: 'KILAKILL', coverUrl: 'https://i.scdn.co/image/ab67616d00001e029cfeb557a5c18c33704defd8', url:'https://open.spotify.com/album/4PQyI43ts401747X185N4B'},
  {title: 'MADARA MOOD', artist: 'PANICX, RAYZISSS', coverUrl: 'https://i.scdn.co/image/ab67616d00001e02c3176b1f34b7efddcc48e382', url:'https://open.spotify.com/album/6S6jftMjrIScaQhLgwKLWv'},
  {title: 'BASS KING', artist: 'REDFXRD', coverUrl: 'https://i.scdn.co/image/ab67616d00001e02f6b2cab8f1e78586b67fe914', url:'https://open.spotify.com/album/0hFhfNx5v1zLUD02rmjJv2'},
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
                <a class="d-block text-decoration-none" href={item.url} target="_blank">
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
