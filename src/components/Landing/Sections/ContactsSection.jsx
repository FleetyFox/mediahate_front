import React from "react";

const ContactsSection = () => {
  return (
    <section id="contacts">
      <div
        class="section-title"
        data-sal="slide-right"
        style={{'--sal-duration' :'.8s'}}

        data-sal-easing="easeOutCubic"
      >
        Напишите нам
      </div>
      <div class="section-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group h-100 fs-3 mb-3">
                <a
                  class="list-group-item d-block text-decoration-none"
                  href="mailto:mediahate@mail.com"
                >
                  <div class="fw-bold">EMAIL</div>
                  <div class="text-white">mediahate@mail.com</div>
                </a>
                <a
                  class="list-group-item d-block text-decoration-none"
                  href="tel:+79518827563"
                >
                  <div class="fw-bold">PHONE</div>
                  <div class="text-white">+7 (951) 882-75-63</div>
                </a>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="card h-100">
                <div class="card-body">
                  <form action="#">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Ваш email"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Ваш телефон"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Ваш никнейм"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Введите дополнительную ифнормацию"
                    />
                    <input
                      class="w-100 btn btn-outline-white"
                      type="submit"
                      value="Отправить"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
