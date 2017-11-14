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
              <div class="form-callback__name">
                <div class="text">Name</div>
                <input type="text" class="name" placeholder="Alex">
              </div>
              <div class="form-callback__lastname">
                <div class="text">Lastname</div>
                <input type="text" class="lastname" placeholder="Toksin">
              </div>
              <div class="form-callback__firstname">
                <div class="text">Firstname</div>
                <input type="text" class="firstname" placeholder="Vyacheslavovich">
              </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__contacts">
              <div class="title">Контактная информация</div>

              <div class="form-callback__number">
                <div class="text">Контактный номер</div>
                <input type="text" class="number" placeholder="Введите номер">
                <img src="" alt="" class="telefon">
                <div class="form-callback__error">Пожалуйста, проверте номер</div>
              </div>

              <div class="form-callback__mail">
                <div class="text">Электронная почта</div>
                <input type="text" class="mail" placeholder="Введите почту">
                <img src="" alt="" class="mail">
                <div class="form-callback__error">Please, renumber contact mail</div>
              </div>
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__fan">
              <div class="title">ВАше Общее впечатление:</div>
              <input type="radio" name="fan" value="rad1">Скорее положительное
              <input type="radio" name="fan" value="rad2">Скорее отрицательное
              <input type="radio" name="fan" value="rad3">Затрудняюсь ответить
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__landmarks">
              <div class="title">посещенные  достопримечательности:</div>
              <input type="checkbox" name="visit" value="check1">Мост Дьявола
              <input type="checkbox" name="visit" value="check2">Слайд-парк
              <input type="checkbox" name="visit" value="check3">Гора-Колокол
              <input type="checkbox" name="visit" value="check4">Красные скалы
            </div>
          </li>

          <li class="form-callback__item">
            <div class="form-callback__emodzi">
              <div class="title">Опишите свои эмоции:</div>
                <input type="text" class="number" placeholder="Опишите подробно свои восторги...">
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

