import Link from "next/link";
import React, {useState, useEffect} from "react";

const Header = () => {

  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const advantages = document.getElementById("advantages");
    const releases = document.getElementById("releases");
    const artists = document.getElementById("artists");
    const contacts = document.getElementById("contacts");

    if (isElementVisible(advantages)) {
      setActiveLink("advantages");
    } else if (isElementVisible(releases)) {
      setActiveLink("releases");
    } else if (isElementVisible(artists)) {
      setActiveLink("artists");
    } else if (isElementVisible(contacts)) {
      setActiveLink("contacts");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top >= 0 && rect.bottom <= windowHeight;
  };

  return (
    <header class="header position-fixed w-100 shadow">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container">
              <Link class="navbar-brand" href="/"><span class="accent-text">M</span>H</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class={ `nav-link ${activeLink === 'advantages' ? 'active' : ''} `} aria-current="page" href="/#advantages">О нас</Link>
                  </li>
                  <li class="nav-item">
                    <Link class={ `nav-link ${activeLink === 'releases' ? 'active' : ''} `} aria-current="page" href="/#releases">Популярные релизы</Link>
                  </li>
                  <li class="nav-item">
                    <Link class={ `nav-link ${activeLink === 'artists' ? 'active' : ''} `} href="#artists">Артисты</Link>
                  </li>
                  <li class="nav-item">
                    <Link class={ `nav-link ${activeLink === 'contacts' ? 'active' : ''} `} href="#contacts">Контакты</Link>
                  </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="https://vk.com/mediahatemusic"><img class="icon" src="/icons/vk.svg" width="20px" alt="VK Logo" /><span class="ps-2 d-md-none">VK</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-discord"></i><span class="ps-2 d-md-none">Discord</span></a></li>
                </ul>
                <ul class="navbar-nav gap-2 ps-3">
                  <Link href="/sendform" class="btn btn-outline-white btn-sm">Выпустить трек</Link> 
                </ul>
              </div>
            </div>
          </nav>
    </header>
  );
};

export default Header;
