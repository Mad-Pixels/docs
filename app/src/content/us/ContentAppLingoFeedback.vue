<template>
  <section class="section">
    <PageGrid :number-of-columns="1" alignment="inward">
      <template #column-1>
        <div class="content">
          <h1>Feedback</h1>
          <p>
            Thank you for choosing AppLingo!
          </p>
          <p>
            Your feedback helps us improve the app and make it more user-friendly.
            On this page, you can report a bug or share your ideas for improving the application.
          </p>
        </div>
      </template>
    </PageGrid>
  </section>

  <section class="section">
    <h2 class="section-title">How to Properly Report a Bug</h2>
    <CardText>
      <p>
        To help us fix the issue faster, please provide as much detail as possible:
      </p>
      <ul class="styled-ul">
        <li><strong>Detailed description of the problem</strong>: what exactly happened</li>
        <li><strong>Steps to reproduce</strong>: how to replicate the error</li>
        <li><strong>Device and iOS version</strong>: for example, iPhone 13, iOS 15.5</li>
        <li><strong>App version</strong>: found in settings or TestFlight</li>
      </ul>
    </CardText>
  </section>

  <section class="section">
    <h2 class="section-title">Types of Feedback</h2>
    <CardsGrid auto-fit min-card-width="320px">
      <CardView title="Report a Bug" icon="bug">
        <ul class="styled-ul">
          <li>App doesn't work as expected</li>
          <li>Crashes or freezes</li>
          <li>Interface issues</li>
          <li>Errors in translations or dictionaries</li>
        </ul>
      </CardView>
      <CardView title="Suggest an Improvement" icon="idea">
        <ul class="styled-ul">
          <li>New features or games</li>
          <li>Improvements to existing functionality</li>
          <li>Interface optimization ideas</li>
          <li>Design and usability</li>
        </ul>
      </CardView>
    </CardsGrid>
  </section>

  <section class="section">
    <h2 class="section-title">Alternative Ways to Contact Us</h2>
    <PageGrid :number-of-columns="2" :proportions="[1, 1]" alignment="inward">
      <template #column-1>
        <CardText :no-animation="true">
          <h3>Support Email</h3>
          <p>
            If you prefer to contact us directly via email, you can write to us at
            <strong>hello@madpixels.io</strong>
          </p>
          <p>
            We will respond within 1-2 business days.
          </p>
        </CardText>
      </template>
      <template #column-2>
        <CardText :no-animation="true">
          <h3>Social Media</h3>
          <p>
            Follow our updates and connect with us through social media:
          </p>
          <ul class="styled-ul">
            <li><a href="https://t.me/madpixels_community">Telegram</a></li>
          </ul>
        </CardText>
      </template>
    </PageGrid>
  </section>

  <section class="section">
    <h2 class="section-title">Frequently Asked Questions</h2>
    <CardsGrid auto-fit min-card-width="380px">
      <CardText title="When will I receive a response?">
        <p>We process all messages within 1-3 business days. For urgent inquiries, it's better to contact us directly via email.</p>
      </CardText>
      <CardText title="Will my feedback be considered?">
        <p>We carefully review all suggestions and take them into account when planning future updates.</p>
      </CardText>
    </CardsGrid>
  </section>

  <section class="section">
    <PageGrid :number-of-columns="1" alignment="center">
      <template #column-1>
        <CardText :no-animation="true">
          <p class="center-text">
            Thank you for helping us improve AppLingo! <br>
            Together, we'll make language learning even more effective and engaging.
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