import VKWidget from "@/components/VKWidget";
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
        Связаться с нами
      </div>
      <div class="section-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group h-100 fs-5 text-center mb-3">
              <a
                  class="list-group-item d-block text-decoration-none"
                  href="mailto:work@mediahate.com"
                >
                  <div class="fw-bold">EMAIL</div>
                  <div class="text-white">work@mediahate.com</div>
                </a>
                <a
                  class="list-group-item d-block text-decoration-none"
                  href="https://t.me/mediahatelabel"
                >
                  <div class="fw-bold">TELEGRAM</div>
                  <div class="text-white">https://t.me/mediahatelabel</div>
                </a>
                <a
                  class="list-group-item d-block text-decoration-none"
                  href="https://vk.com/mediapanicx"
                >
                  <div class="fw-bold">VK</div>
                  <div class="text-white">https://vk.com/mediapanicx</div>
                </a>
              <VKWidget/>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="card ">
                <div class="card-body">
                  <h4 className="card-title">Правообладателям</h4>
                  <form action="#">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      class="form-control"
                      type="tel"
                      placeholder="Телефон"
                    />
                    <textarea className="form-control" placeholder="Дополнительная ифнормация" rows="4"></textarea>
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
