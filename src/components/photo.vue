<template>
  <div>
    <div class="sedona-foto sedona-foto_small">
      <img src="../assets/sedona-foto/text-sedona.svg" class="sedona-foto__text"/>
      <picture>
        <source media="(min-width: 1024px)"
                srcset="../assets/sedona-foto/bg-intro-triangle-desktop.svg 1024w"/>
        <source media="(min-width: 768px)"
                srcset="../assets/sedona-foto/bg-intro-triangle-tablet.svg 768w"/>
        <img src="../assets/sedona-foto/bg-intro-triangle-mobile.svg"
             class="sedona-foto__triggle"/>
      </picture>
    </div>

    <div class="foto-video">
      <div class="foto-video__head">
        <div class="title">Фото и видео  </div>
        <div class="text">Не можете решиться на путешествие из-за курса?
          Фотографии помогут вам забыть о политике и экономике. </div>
      </div>
      <ul class="foto-video__list">
       <li class="foto-video__item foto-video__item_big">
         <picture>
           <source media="(min-width: 1024px)"
                   srcset="../assets/foto-video/photo-1-desktop@1x.jpg 1024w,
                          ../assets/foto-video/photo-1-desktop@2x.jpg 2x"/>
           <source media="(min-width: 768px)"
                   srcset="../assets/foto-video/photo-1-tablet@1x.jpg 768w,
                    ../assets/foto-video/photo-1-tablet@2x.jpg 2x"/>
           <source media="(min-width: 320px)"
                   srcset="../assets/foto-video/photo-1-mobile@1x.jpg 320w,
                    ../assets/foto-video/photo-1-mobile@2x.jpg 2x"/>
           <img src="../assets/foto-video/photo-1-mobile@1x.jpg"
                alt="foto"
                class="foto"/>
         </picture>
         <div class="foto-video__item-wrapper">
           <div class="foto-video__title-wrapper">
             <div class="foto-video__title">Неродные просторы</div>
             <div class="foto-video__text">Автор фото:<span>Alex Toksin</span></div>
           </div>
           <div v-on:click="kek++" class="like">
             <picture class="pic__like">
             <source
               media="(min-width:1024px)"
               srcset="../assets/like/icon-like-white.svg 1024w">
             <img
               src="../assets/like/icon-like.svg"
               alt="like"
               class="like__ico"
             >
             </picture>
             <div class="counter">{{kek}}</div>
           </div>
         </div>
      </li>
        <li class="foto-video__item">
          <picture>
            <source media="(min-width: 1024px)"
                    srcset="../assets/foto-video/photo-2-desktop@1x.jpg 1024w,
                          ../assets/foto-video/photo-2-desktop@2x.jpg 2x"/>
            <source media="(min-width: 768px)"
                    srcset="../assets/foto-video/photo-2-tablet@1x.jpg 768w,
                    ../assets/foto-video/photo-2-tablet@2x.jpg 2x"/>
            <source media="(min-width: 320px)"
                    srcset="../assets/foto-video/photo-2-mobile@1x.jpg 320w,
                    ../assets/foto-video/photo-2-mobile@2x.jpg 2x"/>
          <img src="../assets/foto-video/photo-2-mobile@1x.jpg"
               alt="foto"
               class="foto">
          </picture>
          <div class="foto-video__item-wrapper">
            <div class="foto-video__title-wrapper">
            <div class="foto-video__title">Местная растительность</div>
            <div class="foto-video__text">Автор фото: <span>Alex Toksin</span></div>
            </div>
            <div v-on:click="kek1++" class="like">
              <picture class="pic__like">
                <source
                  media="(min-width:1024px)"
                  srcset="../assets/like/icon-like-white.svg 1024w">
                <img
                  src="../assets/like/icon-like.svg"
                  alt="like"
                  class="like__ico"
                >
              </picture>
              <div class="counter">{{kek1}}</div>
            </div>
          </div>
        </li>
        <li class="foto-video__item">
          <picture>
            <source media="(min-width: 1024px)"
                    srcset="../assets/foto-video/photo-3-desktop@1x.jpg 1024w,
                          ../assets/foto-video/photo-3-desktop@2x.jpg 2x"/>
            <source media="(min-width: 768px)"
                    srcset="../assets/foto-video/photo-3-tablet@1x.jpg 768w,
                    ../assets/foto-video/photo-3-tablet@2x.jpg 2x"/>
            <source media="(min-width: 320px)"
                    srcset="../assets/foto-video/photo-3-mobile@1x.jpg 320w,
                    ../assets/foto-video/photo-3-mobile@2x.jpg 2x"/>
            <img src="../assets/foto-video/photo-3-mobile@1x.jpg"
                 alt="foto"
                 class="foto">
          </picture>
          <div class="foto-video__item-wrapper">
            <div class="foto-video__title-wrapper">
            <div class="foto-video__title">Дорога на север</div>
            <div class="foto-video__text">Автор фото: <span>Alex Toksin</span></div>
            </div>
            <div v-on:click="kek2++" class="like">
              <picture class="pic__like">
                <source
                  media="(min-width:1024px)"
                  srcset="../assets/like/icon-like-white.svg 1024w">
                <img
                  src="../assets/like/icon-like.svg"
                  alt="like"
                  class="like__ico"
                >
              </picture>
              <div class="counter">{{kek2}}</div>
            </div>
          </div>
        </li>
        <li class="foto-video__item">
          <picture>
            <source media="(min-width: 1024px)"
                    srcset="../assets/foto-video/photo-4-desktop@1x.jpg 1024w,
                          ../assets/foto-video/photo-4-desktop@2x.jpg 2x"/>
            <source media="(min-width: 768px)"
                    srcset="../assets/foto-video/photo-4-tablet@1x.jpg 768w,
                    ../assets/foto-video/photo-4-tablet@2x.jpg 2x"/>
            <source media="(min-width: 320px)"
                    srcset="../assets/foto-video/photo-4-mobile@1x.jpg 320w,
                    ../assets/foto-video/photo-4-mobile@2x.jpg 2x"/>
            <img src="../assets/foto-video/photo-4-mobile@1x.jpg"
                 alt="foto"
                 class="foto">
          </picture>
          <div class="foto-video__item-wrapper">
            <div class="foto-video__title-wrapper">
            <div class="foto-video__title">Мост дьявола</div>
            <div class="foto-video__text">Автор фото: <span>Alex Toksin</span></div>
            </div>
            <div v-on:click="kek3++" class="like">
              <picture class="pic__like">
                <source
                  media="(min-width:1024px)"
                  srcset="../assets/like/icon-like-white.svg 1024w">
                <img
                  src="../assets/like/icon-like.svg"
                  alt="like"
                  class="like__ico"
                >
              </picture>
              <div class="counter">{{kek3}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="presentation">
      <div class="presentation__wrapper">
        <div class="title">Все еще сомневаетесь?
        </div>
        <div class="text">Смотрите видеопрезентацию и скорее за билетами,
        пока они не подорожали в очередной раз!
        </div>
      </div>
    </div>
    <div class="video">
      <video width="100%" :poster="poster">
      </video>
      <div class="video__control">
        <div class="video__track-wrapper">
          <div class="video__track"></div>
        </div>
        <div class="video__option">
          <div class="video__item"><img src="../assets/video/icon-video-replay.svg" alt="replay" class="replay"></div>
          <div class="video__item-wrapper">
            <div class="video__item video__item_mod"><img src="../assets/video/icon-video-subtitles.svg" alt="subtitle" class="subtitle"></div>
            <div class="video__item video__item"><img src="../assets/video/icon-video-fullscreen.svg" fill="#fff" alt="fullscreen" class="fullscreen"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
        return{
          kek: 0,
          kek1: 0,
          kek2: 0,
          kek3: 0,
          poster: require('../assets/video/video-mobile@1x.jpg')
        }
      }
    }
</script>
