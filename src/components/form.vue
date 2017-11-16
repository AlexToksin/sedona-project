<template>
    <div>
      <!--form-->
      <div class="form-callback">
        <ul class="form-callback__list">
          <li class="form-callback__item">
            <div class="form-callback__head">
              <div class="title">Оставьте свой отзыв  </div>
              <div class="text">Помогите нашим отелям стать лучше!
                оставьте отзыв о них, а также о посещенных вами достопримечательностях</div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__requisites">
              <div class="title">Представьтесь, пожалуйста:</div>
              <div class="form-callback__item">
                <label>Имя<input type="text" class="name" placeholder="Alex"></label>
              </div>
              <div class="form-callback__item">
                <label>Фамилия<input type="text" class="item" placeholder="Toksin"></label>
              </div>
              <div class="form-callback__item">
                <label>Отчество<input type="text" class="firstname" placeholder="Vyacheslavovich"></label>
              </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__contacts">
              <div class="title">Контактная информация</div>
                <div class="form-callback__number">
                  <label> Контактный номер<input type="text" class="number" placeholder="Введите номер"></label>
                  <img src="../assets/form-callback/icon-phone.svg" alt="" class="telefon">
                  <div class="form-callback__error">Пожалуйста, проверте номер</div>
                 </div>
                 <div class="form-callback__mail">
                   <label>Электронная почта<input type="text" class="mail" placeholder="Введите почту"></label>
                   <img src="../assets/form-callback/icon-mail.svg" alt="" class="mail">
                   <div class="form-callback__error">Пожалуйста, проверте почту</div>
                 </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__sample">
              <div class="title">Ваше Общее впечатление:</div>
              <label><input type="radio" name="fan" value="rad1">Скорее положительное</label>
              <label><input type="radio" name="fan" value="rad2">Скорее отрицательное</label>
              <label><input type="radio" name="fan" value="rad3">Затрудняюсь ответить</label>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__sample">
              <div class="title">посещенные  достопримечательности:</div>
              <label><input type="checkbox" name="visit" value="check1">Мост Дьявола</label>
              <label><input type="checkbox" name="visit" value="check2">Слайд-парк</label>
              <label><input type="checkbox" name="visit" value="check3">Гора-Колокол</label>
              <label><input type="checkbox" name="visit" value="check4">Красные скалы</label>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__emodzi">
              <div class="title">Опишите свои эмоции:</div>
              <textarea class="number" placeholder="Опишите подробно свои восторги..."></textarea>
             <div class="btn">оставить отзыв</div>
            </div>
          </li>
        </ul>
      </div>



    </div>
</template>

<script>
    export default {

    }
</script>

