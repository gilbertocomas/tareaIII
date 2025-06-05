<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{titulo}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" color="light">
      <ion-header collapse="condense">
        <ion-toolbar color="primary">
          <ion-title size="large">{{titulo}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div class="profile-card">
          <ion-img src="../assets/foto.jpg" alt="Mi foto de perfil" class="profile-image"></ion-img>
          <h1 class="profile-name">Gilberto Comas</h1>
          <div class="profile-details">
            <ion-item lines="none" class="detail-item">
              <ion-icon :icon="schoolOutline" slot="start" color="primary"></ion-icon>
              <ion-label>Matrícula: 2022-0700</ion-label>
            </ion-item>
            <ion-item lines="none" class="detail-item">
              <ion-icon :icon="mailOutline" slot="start" color="primary"></ion-icon>
              <ion-label>gilbertocomas@gmail.com</ion-label>
            </ion-item>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { schoolOutline, mailOutline } from 'ionicons/icons';

const titulo = "Inicio";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.profile-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  object-fit: cover;
  border: 4px solid var(--ion-color-primary);
}

.profile-name {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
}

.profile-details {
  text-align: left;
  margin-top: 20px;
}

.detail-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  margin-bottom: 15px;
  font-size: 16px;
}

ion-item::part(native) {
  padding-left: 0;
}
</style>