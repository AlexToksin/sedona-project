<template>
  <div>
    <div class="sedona-foto">
      <img
        src="../assets/sedona-foto/text-sedona-index.svg"
        class="sedona-foto__text"/>
      <picture>
        <source media="(min-width: 1024px)"
          srcset="../assets/sedona-foto/bg-intro-triangle-desktop.svg 1024w"/>
        <source media="(min-width: 768px)"
          srcset="../assets/sedona-foto/bg-intro-triangle-tablet.svg 768w"/>
        <img src="../assets/sedona-foto/bg-intro-triangle-mobile.svg"
        class="sedona-foto__triggle"/>
      </picture>
    </div>
    <!--as-sedona-->
    <div class="as-sedona">
      <div class="as-sedona__wrapper">
        <div class="as-sedona__title-wraper">
          <div class="title">СЕДОНА — небольшой  городок в АРИЗОНЕ,  зАСЛУЖИвающий большего!  </div>
          <div class="text">Рассмотрим 5 причин, по которым Седона круче чем гранд каньон!</div>
        </div>
        <ul class="as-sedona__list">
          <li class="as-sedona__item">
            <div class="as-sedona__wrapper-case">
              <div class="as-sedona__visible">
                <div class="title title_color">НАСТОЯЩИЙ ГОРОДОК  </div>
                <div class="as-sedona__count">— №1 —  </div>
               <div class="text text_color">СЕДОНА НЕ АТРАКЦИОН ДЛЯ ТУРИСТОВ, ТАМ ТЕЧЕТ СВОЯ ЖИЗНЬ</div>
              </div>
            </div>
                <div class="as-sedona__foto-item">
                  <picture>
                    <source media="(min-width: 1024px)"
                            srcset="../assets/as-sedona/photo-city@2x.jpg 1024w"/>
                    <source media="(min-width: 768px)"
                            srcset="../assets/as-sedona/photo-city@2x.jpg 768w"/>
                    <source media="(min-width: 320px)"
                            srcset="../assets/as-sedona/photo-city@1x.jpg 320w"/>
                    <img src="../assets/as-sedona/photo-city@1x.jpg" class="foto" alt="image">
                  </picture>
                </div>
          </li>
          <li class="as-sedona__item">
            <ul class="as-sedona__list-wrapper">
              <li class="as-sedona__list-item">
                <div class="as-sedona__wrapper-item">
                  <img src="../assets/as-sedona/icon-house.svg" alt="" class="ico ico_home"  alt="ico">
                  <div class="title title_modify">Жилье</div>
                </div>

                <div class="text text_modify">Рекомендуем пожить в настоящем мотеле, все как в кино!</div>
              </li>
              <li class="as-sedona__list-item">
                <div class="as-sedona__wrapper-item">
                  <img src="../assets/as-sedona/icon-gift.svg" alt="" class="ico ico_gifts" alt="ico">
                  <div class="title title_modify">СУВЕНИРЫ  </div>
                </div>
                <div class="text text_modify">Не только китайского, но и местного производства!</div>
              </li>
              <li class="as-sedona__list-item">
                <div class="as-sedona__wrapper-item">
                  <img src="../assets/as-sedona/icon-burger.svg" alt="" class="ico ico_burger" alt="ico">
                  <div class="title title_modify">ЕДА  </div>
                </div>
                <div class="text text_modify">Всегда заказывайте ФИРМЕННЫЙ БУРГЕР, Вы НЕ разочаруетесь!</div>
              </li>
            </ul>
          </li>
          <li class="as-sedona__item">
            <div class="as-sedona__wrapper-case">
            <div class="as-sedona__visible">
              <div class="title title_color">ТАМ ЕСТЬ Мост дьявола</div>
              <div class="as-sedona__count">— №2 —  </div>
              <div class="text text_color">  Да, по нему можно пройти! Если конечно вы осмелитесь</div>
            </div>
            </div>
              <div class="as-sedona__foto-item">
                <img src="../assets/as-sedona/photo-bridge@1x.jpg" class="foto" alt="image">
            </div>
          </li>

          <li class="as-sedona__item as-sedona__item_close">
            <div class="as-sedona__visible">
              <div class="title title_color">НЕБОЛЬШАЯ ПЛОЩАДЬ    </div>
              <div class="as-sedona__count">— №3 —  </div>
              <div class="text text_color">ВСЕ достопримечательности находятся очень близко</div>
            </div>
            <div class="as-sedona__hidden"></div>
          </li>
          <li class="as-sedona__item as-sedona__item_close">
            <div class="as-sedona__visible">
              <div class="title title_color">КРАСИВАЯ ДОРОГА    </div>
              <div class="as-sedona__count">— №4 —  </div>
              <div class="text text_color">ЕХАТЬ В СЕДОНУ ИЗ ЛАС-ВЕГАСА  совсем НЕ СКУЧНО!</div>
            </div>
            <div class="as-sedona__hidden"></div>
          </li>
          <li class="as-sedona__item as-sedona__item_close">
            <div class="as-sedona__visible">
              <div class="title title_color">МАЛО ТУРИСТОВ</div>
              <div class="as-sedona__count">— №5 —  </div>
              <div class="text text_color">Большинство едет в гранд каньон и толпится там</div>
            </div>
            <div class="as-sedona__hidden"></div>
          </li>

        </ul>
      </div>
    </div>

    <!--interesting-->
    <div class="interisting">
      <div class="interisting__wrapper">
        <div class="title title_interisting">ЗАИНТЕРЕСОВАЛИСЬ?  </div>
        <div class="text text_interisting">Укажите предполагаемые даты поездки
        и мы покажем вам лучшие предложения
        гостиниц в седоне  </div>
        <div class="btn">
          <a href="" class="find-hostel">Найти гостиницу</a>
        </div>
      </div>
    </div>

    <!--map-->
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104770.
38018730555!2d-111.86517855273749!3d34.85435832354933!2m3!1f0!2f0!3f
0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6
c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0
!3m2!1sru!2sru!4v1510827969410" width="100%" height="350"
              frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

    </div>
</template>

<script>
    export default {

    }
</script>

