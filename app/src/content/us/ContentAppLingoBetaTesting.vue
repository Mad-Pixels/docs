<template>
  <PageWrapper>
    <section class="section">
      <PageGrid :number-of-columns="1" alignment="inward">
        <template #column-1>
          <div class="content">
            <h1>iOS App Beta Testing Guide</h1>
            <p>
              Welcome to the AppLingo beta testing team! This guide will help you get started with testing 
              and contribute to improving the application.
            </p>
          </div>
        </template>
      </PageGrid>
    </section>
    <section class="section">
      <h2 class="section-title">What is Beta Testing?</h2>
      <CardText>
        <p>
          Beta testing is a development stage where the application is tested by a limited group of users 
          before its official release.
        </p>
        <p>
          <strong>Your participation will help us:</strong>
        </p>
        <ul class="styled-ul">
          <li>Identify bugs and issues in the application</li>
          <li>Improve functionality based on real usage scenarios</li>
          <li>Optimize performance across different devices</li>
        </ul>
      </CardText>
    </section>
    <section class="section">
      <h2 class="section-title">How to Become a Beta Tester</h2>
      <CardsGrid auto-fit min-card-width="320px">
        <CardView title="1. Fill Out the Application" icon="form">
          <ul class="styled-ul">
            <li>Provide your name</li>
            <li>Enter a valid email address</li>
            <li>Describe why you want to participate in testing</li>
          </ul>
          <a href="#beta-form" class="nav-link">
            Fill out the form now
          </a>
        </CardView>
        <CardView title="2. Wait for the Invitation" icon="mail">
          <ul class="styled-ul">
            <li>Check your email after application processing</li>
            <li>Find the TestFlight invitation email</li>
            <li>Follow the instructions in the email</li>
          </ul>
        </CardView>
      </CardsGrid>
    </section>

    <h2 class="section-title">Working with TestFlight</h2>
    <section class="section">
      <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="outward">
        <template #column-1>
          <ImageWrapper src="/content/applingo-beta/1.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
        </template>
        <template #column-2>
          <div style="width: 100%;text-align: left;">
            <CardText class="section" :no-animation="true">
              [1] - Official testing application
            </CardText>
            <h3>#1 Download and Install the App</h3>
            <p>
              TestFlight is Apple's official tool for testing beta versions of applications. 
              It allows users to install preview versions, test new features, and report issues. 
              This helps developers identify and fix bugs before releasing the final version of the application.
            </p>
          </div>
        </template>
      </PageGrid>
    </section>
    <section class="section">
      <PageGrid :number-of-columns="2" :proportions="[2, 1]" alignment="outward">
        <template #column-1>
          <div style="width: 100%;text-align: left;">
            <h3>#2 Install AppLingo from TestFlight</h3>
            <p>
              Find <strong>AppLingo</strong> in the list of available applications for testing
              and install the app.
            </p>
            <CardText :no-animation="true">
              <p>[1] - List of applications available for testing</p>
              <p>[2] - Install AppLingo</p>
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
        <template #column-2>
          <div style="width: 100%;text-align: left;">
            <CardText class="section" :no-animation="true">
              <p>[1] - Remove / Install application</p>
              <p>[2] - Send feedback (with / without screenshot)</p>
              <p>[3] - App version and build number</p>
              <p>[4] - Release changes description</p>
              <p>[5] - Manage notifications and auto-updates</p>
            </CardText>
            <h3>#3 Application Information</h3>
            <p>
              This is the general screen with TestFlight application information.
              View general information, manage app updates and notifications,
              and send feedback from here.
            </p>
          </div>
        </template>
      </PageGrid>
    </section>

    <section class="section">
      <h2 class="section-title">Feedback Guidelines</h2>
      <CardText>
        <ul class="styled-ul">
          <li>Be as detailed as possible when describing issues</li>
          <li>Provide step-by-step instructions to reproduce the error</li>
          <li>Include screenshots or videos if they help explain the problem</li>
          <li>Report any interface inconveniences</li>
        </ul>
      </CardText>
      <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="outward">
        <template #column-1>
          <ImageWrapper src="/content/applingo-beta/4.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
        </template>
        <template #column-2>
          <div style="width: 100%;text-align: left;">
            <CardText class="section" :no-animation="true">
              <p>[1] - Take a screenshot</p>
              <p>[2] - Edit / Review screenshot</p>
              <p>[3] - Send as feedback</p>
            </CardText>
            <h3>You can also send feedback by taking a screenshot inside the app</h3>
          </div>
        </template>
      </PageGrid>
    </section>

    <section class="section">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <CardsGrid auto-fit min-card-width="380px">
        <CardText title="Is it free?">
          <p>Yes, participation in beta testing is completely free.</p>
        </CardText>
        <CardText title="Can I share the app?">
          <p>No, the beta version is only for registered testers.</p>
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