<template>
  <section class="section">
    <PageGrid :number-of-columns="1" alignment="inward">
      <template #column-1>
        <div class="content">
          <h1>Обратная связь</h1>
          <p>
            Спасибо, что выбрали AppLingo! 
          </p>
          <p>
            Ваше мнение помогает нам улучшать приложение и делать его более удобным.
            На этой странице вы можете сообщить о найденной ошибке или поделиться своими идеями по улучшению приложения.
          </p>
        </div>
      </template>
    </PageGrid>
  </section>

  <section class="section">
    <h2 class="section-title">Как правильно сообщить об ошибке</h2>
    <CardText>
      <p>
        Чтобы мы могли быстрее исправить проблему, пожалуйста, предоставьте максимально подробную информацию:
      </p>
      <ul class="styled-ul">
        <li><strong>Подробное описание проблемы</strong>: что именно произошло</li>
        <li><strong>Шаги для воспроизведения</strong>: как можно повторить ошибку</li>
        <li><strong>Устройство и версия iOS</strong>: например, iPhone 13, iOS 15.5</li>
        <li><strong>Версия приложения</strong>: найти в настройках или TestFlight</li>
      </ul>
    </CardText>
  </section>

  <section class="section">
    <h2 class="section-title">Типы обратной связи</h2>
    <CardsGrid auto-fit min-card-width="320px">
      <CardView title="Сообщить об ошибке" icon="bug">
        <ul class="styled-ul">
          <li>Приложение не работает как ожидалось</li>
          <li>Вылеты или зависания</li>
          <li>Проблемы с интерфейсом</li>
          <li>Ошибки в переводах или словарях</li>
        </ul>
      </CardView>
      <CardView title="Предложить улучшение" icon="idea">
        <ul class="styled-ul">
          <li>Новые функции или игры</li>
          <li>Улучшения существующего функционала</li>
          <li>Идеи по оптимизации интерфейса</li>
          <li>Дизайн и удобство использования</li>
        </ul>
      </CardView>
    </CardsGrid>
  </section>

  <section class="section">
    <h2 class="section-title">Альтернативные способы связи</h2>
    <PageGrid :number-of-columns="2" :proportions="[1, 1]" alignment="inward">
      <template #column-1>
        <CardText :no-animation="true">
          <h3>Email поддержки</h3>
          <p>
            Если вы предпочитаете связаться напрямую через email, вы можете написать нам на адрес 
            <strong>hello@madpixels.io</strong>
          </p>
          <p>
            Мы ответим в течение 1-2 рабочих дней.
          </p>
        </CardText>
      </template>
      <template #column-2>
        <CardText :no-animation="true">
          <h3>Социальные сети</h3>
          <p>
            Следите за обновлениями и связывайтесь с нами через социальные сети:
          </p>
          <ul class="styled-ul">
            <li><a href="https://t.me/madpixels_community">Telegram</a></li>
          </ul>
        </CardText>
      </template>
    </PageGrid>
  </section>

  <section class="section">
    <h2 class="section-title">Часто задаваемые вопросы</h2>
    <CardsGrid auto-fit min-card-width="380px">
      <CardText title="Когда я получу ответ?">
        <p>Мы обрабатываем все сообщения в течение 1-3 рабочих дней. За срочными обращениями лучше обратиться напрямую по email.</p>
      </CardText>
      <CardText title="Будет ли мой отзыв учтен?">
        <p>Мы внимательно рассматриваем все предложения и учитываем их при планировании следующих обновлений.</p>
      </CardText>
    </CardsGrid>
  </section>

  <section class="section">
    <PageGrid :number-of-columns="1" alignment="center">
      <template #column-1>
        <CardText :no-animation="true">
          <p class="center-text">
            Спасибо за вашу помощь в улучшении AppLingo! <br>
            Вместе мы сделаем изучение языков еще более эффективным и увлекательным.
          </p>
        </CardText>
      </template>
    </PageGrid>
  </section>
</template>

<script setup>
import PageGrid from '@/components/PageGrid.vue'
import CardsGrid from '@/components/CardsGrid.vue'
import CardText from '@/components/CardText.vue'
import CardView from '@/components/CardView.vue'
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>