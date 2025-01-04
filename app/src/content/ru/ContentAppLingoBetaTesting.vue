<template>
  <PageWrapper>
    <section class="section">
      <PageGrid :number-of-columns="1" alignment="inward">
        <template #column-1>
          <div class="content">
            <h1>Руководство по бета-тестированию iOS-приложения</h1>
            <p>
              Добро пожаловать в команду бета-тестеров AppLingo! Это руководство поможет вам начать тестирование 
              и внести свой вклад в улучшение приложения.
            </p>
          </div>
        </template>
      </PageGrid>
    </section>
    <section class="section">
      <h2 class="section-title">Что такое бета-тестирование?</h2>
      <CardText>
        <p>
          Бета-тестирование — этап разработки, на котором приложение тестируется ограниченной группой пользователей 
          перед официальным релизом. 
        </p>
        <p>
          <strong>Ваше участие поможет нам:</strong>
        </p>
        <ul class="styled-ul">
          <li>Выявить ошибки и проблемы в работе приложения</li>
          <li>Улучшить функциональность на основе реальных сценариев использования</li>
          <li>Оптимизировать производительность на различных устройствах</li>
        </ul>
      </CardText>
    </section>
    <section class="section">
      <h2 class="section-title">Как стать бета-тестером</h2>
      <CardsGrid auto-fit min-card-width="320px">
        <CardView title="1. Заполните заявку" icon="form">
          <ul class="styled-ul">
            <li>Укажите ваше имя</li>
            <li>Предоставьте действующий email</li>
            <li>Опишите, почему хотите участвовать в тестировании</li>
          </ul>
          <a href="#beta-form" class="nav-link">
            Заполнить заявку
          </a>
        </CardView>
        <CardView title="2. Дождитесь приглашения" icon="mail">
          <ul class="styled-ul">
            <li>Проверьте email после обработки заявки</li>
            <li>Найдите письмо с приглашением в TestFlight</li>
            <li>Следуйте инструкциям в письме</li>
          </ul>
        </CardView>
      </CardsGrid>
    </section>

    <h2 class="section-title">Работа с TestFlight</h2>
    <section class="section">
      <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="outward">
        <template #column-1>
          <ImageWrapper src="/content/applingo-beta/1.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
        </template>
        <template #column-2 >
          <div style="width: 100%;text-align: left;">
            <CardText class="section" :no-animation="true">
              [1] - Официальное приложение для тестирования
            </CardText>
            <h3>#1 Скачиваем и устанавливаем приложение</h3>
            <p>
              TestFlight — это официальный инструмент от Apple для тестирования бета-версий приложений. 
              С его помощью пользователи могут устанавливать предварительные версии, проверять новые функции и сообщать о найденных проблемах. 
              Это помогает разработчикам выявить и устранить ошибки перед выпуском финальной версии приложения.
            </p>
          </div>
        </template>
      </PageGrid>
    </section>
    <section class="section">
      <PageGrid :number-of-columns="2" :proportions="[2, 1]" alignment="outward">
        <template #column-1>
          <div style="width: 100%;text-align: left;">
            <h3>#2 Устанавливаем AppLingo из TestFlight</h3>
            <p>
              Из списка доступных для тестирования приложений находим <strong>AppLingo</strong>
              и устанавливаем приложение.
            </p>
            <CardText :no-animation="true">
              <p>[1] - Список приложений доступных для тестирования</p>
              <p>[2] - Устанавливаем AppLingo</p>
            </CardText>
          </div>
        </template>
        <template #column-2>
          <ImageWrapper src="/content/applingo-beta/2.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
        </template>
      </PageGrid>
    </section>
    <section class="section">
      <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="outward">
        <template #column-1>
          <ImageWrapper src="/content/applingo-beta/3.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
        </template>
        <template #column-2 >
          <div style="width: 100%;text-align: left;">
            <CardText class="section" :no-animation="true">
              <p>[1] - Удалить / Установить приложение</p>
              <p>[2] - Отправить отзыв (со скриншотом / без скриншота)</p>
              <p>[3] - Номер версии и номер сборки приложения</p>
              <p>[4] - Описание изменений релиза</p>
              <p>[5] - Управление нотификациями и автообновлением</p>
            </CardText>
            <h3>#3 Информация о приложении</h3>
            <p>
              Это общий экран с информацией о приложении в TestFlight.
              Посмотреть обшую информацию, управлять обновлением приложения и нотификациями,
              так же отсюда можно отправлять обратную связь.
            </p>
          </div>
        </template>
      </PageGrid>
    </section>

    <section class="section">
      <h2 class="section-title">Рекомендации по отправке отзывов</h2>
      <CardText>
        <ul class="styled-ul">
          <li>Будьте максимально подробны в описании проблем</li>
          <li>Указывайте последовательность действий для воспроизведения ошибки</li>
          <li>Прикладывайте скриншоты или видео, если это помогает понять проблему</li>
          <li>Сообщайте о любых неудобствах в интерфейсе</li>
        </ul>
      </CardText>
      <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="outward">
        <template #column-1>
          <ImageWrapper src="/content/applingo-beta/4.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
        </template>
        <template #column-2 >
          <div style="width: 100%;text-align: left;">
            <CardText class="section" :no-animation="true">
              <p>[1] - Сделать скриншот</p>
              <p>[2] - Отредактировать / Проверить скриншот</p>
              <p>[3] - Отправить как обратную связь</p>
            </CardText>
            <h3>Можно так же отправить отзыв делая скриншот внутри приложения</h3>
          </div>
        </template>
      </PageGrid> 
    </section>

    <section class="section">
      <h2 class="section-title">Часто задаваемые вопросы</h2>
      <CardsGrid auto-fit min-card-width="380px">
        <CardText title="Это бесплатно?">
          <p>Да, участие в бета-тестировании полностью бесплатно.</p>
        </CardText>
        <CardText title="Могу ли я поделиться приложением?">
          <p>Нет, бета-версия предназначена только для зарегистрированных тестировщиков.</p>
        </CardText>
      </CardsGrid>
    </section>
  </PageWrapper>
</template>

<script setup>
  import PageWrapper from '@/components/PageWrapper.vue'
  import ImageWrapper from '@/components/ImageWrapper.vue'
  import PageGrid from '@/components/PageGrid.vue'
  import CardsGrid from '@/components/CardsGrid.vue'
  import CardText from '@/components/CardText.vue'
  import CardView from '@/components/CardView.vue'
</script>