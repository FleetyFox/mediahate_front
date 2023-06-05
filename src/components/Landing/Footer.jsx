import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Mediahate</span>
              </div>
              <ul class="nav navbar-nav d-flex flex-row gap-2">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Последние релизы</a>
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
            </footer>
          </div>
    </footer>
  )
}

export default Footer