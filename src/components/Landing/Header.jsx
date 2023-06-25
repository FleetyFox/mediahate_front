import React from "react";

const Header = () => {
  return (
    <header class="header position-fixed w-100 shadow">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container">
              <a class="navbar-brand" href="/"><span class="accent-text">M</span>H</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#releases">Последние релизы</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Контакты</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Артисты</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Лейбл</a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-youtube"></i><span class="ps-2 d-md-none">YouTube</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-facebook"></i><span class="ps-2 d-md-none">Facebook</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-telegram"></i><span class="ps-2 d-md-none">Telegram</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-spotify"></i><span class="ps-2 d-md-none">Spotify</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-discord"></i><span class="ps-2 d-md-none">Discord</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-instagram"></i><span class="ps-2 d-md-none">Instagram</span></a></li>
                </ul>
                <ul class="navbar-nav gap-2">
                  <button class="btn btn-outline-white btn-sm">Выпустить трек</button>
                  <button class="btn">Вход</button>
                </ul>
              </div>
            </div>
          </nav>
    </header>
  );
};

export default Header;
