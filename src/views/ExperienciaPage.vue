<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{titulo}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{titulo}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">Experiencia IONIC</strong>
        <p>
          En el siguiente video explico como fue mi experiencia al desarrollar la Tarea No. 3 en la asignatura Introducción al Desarrollo de Aplicaciones Móviles,
          impartida por el maestro Amadis Suarez. 
        </p>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/_NZBWI94MkA" 
          title="Tarea III IONIC" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

const titulo = "Experiencia";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
  margin-bottom: 10px;
}

#container a {
  text-decoration: none;
}

iframe {
  aspect-ratio: 16/9; 
}
</style>
