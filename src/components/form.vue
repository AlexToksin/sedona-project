<template>
    <div>

        <div v-bind:class="{ activeModal: showModal }" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal">
              <div class="modal__head">
                <div class="title">Ваш отзыв отправлен!</div>
                <div class="text">Спасибо за ваше участие, ваш отзыв уже поступил к нам.
                   В ближайшее время мы опубликуем его на сайте. 
                </div>
              </div>
              <div class="btn-wrapper">
                <div @click="showModal = true" class="btn">Закрыть окно</div>
              </div>
            </div>
          </div>
        </div>

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
      <!--form-->
      <div class="form-callback">
            <div class="form-callback__head">
              <div class="title">Оставьте свой отзыв  </div>
              <div class="text">Помогите нашим отелям стать лучше!
                оставьте отзыв о них, а также о посещенных вами достопримечательностях</div>
            </div>
        <form @submit.prevent="submitPost">
        <ul class="form-callback__list">
          <li class="form-callback__item">
            <div class="form-callback__requisites">
              <div class="title">Представьтесь, пожалуйста:</div>
              <div class="form-callback__wrapper-item">
                <label class="label-item label-item_mod" for="name">Имя: <input @blur="deactiveEr" :class="{ 'err': errActive.nameEr }"  v-model="newUser.name" id="name" type="text" class="text-input text-input_name" placeholder="Alex"></label>
              </div>
              <div class="form-callback__wrapper-item">
                <label class="label-item label-item_mod" for="lastname">Фамилия:  <input @blur="deactiveEr" :class="{ 'err': errActive.lastnameEr }"  v-model="newUser.lastname" id="lastname" type="text" class="text-input" placeholder="Toksin"></label>
              </div>
              <div class="form-callback__wrapper-item">
                <label class="label-item label-item_mod" for="firstname">Отчество: <input @blur="deactiveEr" :class="{ 'err': errActive.firstnameEr }"  v-model="newUser.firstname" id="firstname" type="text" class="text-input" placeholder="Vyacheslavovich"></label>
              </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__contacts">
              <div class="title title_mody">Контактная информация</div>
                <div class="form-callback__wrapper-item">
                  <label class="label-item" for="number"> Контактный номер:</label>
                  <input v-model="newUser.numberPhone"
                         id="number"
                         type="number"
                         class="text-contact"
                         placeholder="Введите телефон"
                         @blur="deactiveEr">
                  <div class="form-callback__ico">
                    <img src="../assets/form-callback/icon-phone.svg" alt="" class="ico-item">
                  </div>
                  <div v-bind:class="{ 'visible': errActive.numberEr }" class="form-callback__error">Ошибка, перепроверте номер</div>
                 </div>
                 <div  class="form-callback__wrapper-item">
                   <label class="label-item" for="mail">Электронная почта:</label>
                   <input v-model="newUser.mail"
                          id="mail" type="text"
                          class="text-contact"
                          placeholder="Введите e-mail"
                          @blur="deactiveEr">
                   <div class="form-callback__ico">
                     <img src="../assets/form-callback/icon-mail.svg" alt="" class="ico-item">
                   </div>
                   <div :class="{ 'visible': errActive.mailEr }"  class="form-callback__error">Ошибка, перепроверте почту</div>
                 </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__sample">
              <div class="title">Ваше Общее впечатление:</div>
              <div class="form-callback__wrapper-radio">
              <input v-model="newUser.picked"
                     type="radio"
                     class="item item_radio"
                     name="fan"
                     value="Скорее положительное"
                     id="radio1">
                <label class="sample" for="radio1">Скорее положительное</label>
              <input v-model="newUser.picked"
                     type="radio"
                     class="item item_radio"
                     name="fan"
                     value="Скорее отрицательное"
                     id="radio2">
                <label class="sample" for="radio2">Скорее отрицательное</label>
              <input v-model="newUser.picked"
                     type="radio"
                     class="item item_radio"
                     name="fan"
                     value="Затрудняюсь ответить"
                     id="radio3">
                <label class="sample" for="radio3">Затрудняюсь ответить</label>
              </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__sample">
              <div class="title title_mody">посещенные  достопримечательности:</div>
              <div class="form-callback__wrapper-checkbox">
              <input v-model="newUser.checkedItems"
                     type="checkbox"
                     class="item item_checkbox"
                     name="visit"
                     value="Мост Дьявола"
                     id="check1">
                <label class="sample" for="check1">Мост Дьявола</label>
              <input v-model="newUser.checkedItems"
                     type="checkbox"
                     class="item item_checkbox"
                     name="visit"
                     value="Слайд-парк"
                     id="check2">
                <label class="sample" for="check2">Слайд-парк</label>
              <input v-model="newUser.checkedItems"
                     type="checkbox"
                     class="item item_checkbox"
                     name="visit"
                     value="Гора-Колокол"
                     id="check3">
                <label class="sample" for="check3">Гора-Колокол</label>
              <input v-model="newUser.checkedItems"
                     type="checkbox"
                     class="item item_checkbox"
                     name="visit"
                     value="Красные скалы"
                     id="check4">
                <label class="sample" for="check4">Красные скалы</label>
              </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__emodji">
              <div class="title title_mody">Опишите свои эмоции:</div>
              <textarea v-model="newUser.message"  class="textarea" id="message" placeholder="Опишите подробно свои восторги..." ></textarea>
             <button  class="btn">оставить отзыв</button>
              <div class="form-callback__hint">* &ndash; обязательные поля</div>
            </div>
          </li>
        </ul>
        </form>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';


  let Cookies = require('js-cookie');
  var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var numberPhoneRe = /(^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)([0-9]{1}[(0-9]{2}[()0-9]{1}[0-9]{1}([)0-9]{0,1})?([0-9]{0,1})?([)-]{0,1})?([-0-9]{0,7})?([0-9]{0,3})?)$)|(^[0-9]{1,4}$)/
  const csrftoken = Cookies.get('csrftoken');
    export default {
        data(){
          return{
            showModal: true,
            errorVal: false,
            errActive: {
              mailEr: true,
              numberEr: true,
              nameEr: false,
              lastnameEr: false,
              firstnameEr: false
            },
            newUser: {
              name: '',
              lastname: '',
              firstname: '',
              numberPhone: '',
              mail: '',
              picked: 'Скорее положительное',
              checkedItems: [],
              message: ''
            },
              items: [],
            }
        },
      computed: {
        validation: function () {
          let self = this;
          return {
            name: !!self.newUser.name.trim(),
            lastname: !!self.newUser.lastname.trim(),
            firstname: !!self.newUser.firstname.trim(),
            numberPhone: numberPhoneRe.test(self.newUser.numberPhone),
            mail: emailRE.test(self.newUser.mail)
          }
        },
        isValid: function () {
          let validation = this.validation
          return Object.keys(validation).every(function (key) {
            return validation[key]
          })
        }
      },
        methods: {
          submitPost() {
            let self = this;
            if(this.isValid){
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                name: self.newUser.name,
                lastname: self.newUser.lastname,
                firstname: self.newUser.firstname,
                numberPhone: self.newUser.numberPhone,
                mail: self.newUser.mail,
                picked: self.newUser.picked,
                checkedItems: self.newUser.checkedItems,
                message: self.newUser.message
              },
              {headers: {'X-CSRFToken': csrftoken}
              })
              .then(function(response){
                self.showModal = false;
              })
          }
          },
          createGet(){
            let self = this;

            axios.get('https://jsonplaceholder.typicode.com/posts')
              .then(function(response){
                  self.items = response.data
              })
          },
          deactiveEr(event){
            let el = event.target;
            let self = this;
            if (el.id == 'name') {
              if (self.validation.name == false) {
                self.errActive.nameEr = true
              } else {
                self.errActive.nameEr = false
              }
            };
            if (el.id == 'lastname') {
              if (self.validation.lastname == false) {
                self.errActive.lastnameEr = true
              } else {
                self.errActive.lastnameEr = false
              }
            };
            if (el.id == 'firstname') {
              if (self.validation.firstname == false) {
                self.errActive.firstnameEr = true
              } else {
                self.errActive.firstnameEr = false
              }
            };
            if (el.id == 'number') {
              if (self.validation.numberPhone == false) {
                self.errActive.numberEr = false
              } else {
                self.errActive.numberEr = true
              }
            } else
                if(el.id == 'mail'){
                  if(self.validation.mail==false){
                    self.errActive.mailEr = false
                  } else {
                    self.errActive.mailEr = true
                  }
                }
          },
        },
      mounted() {
        this.createGet();
      },
    }
</script>


