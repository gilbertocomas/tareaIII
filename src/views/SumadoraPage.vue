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
        <ion-list>
          <ion-item>
            <ion-input 
              v-model="numero1"
              type="number"
              label="Número 1" 
              label-placement="floating" 
              placeholder="Ingrese un número"
              ref="input1"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-input 
              v-model="numero2"
              type="number"
              label="Número 2" 
              label-placement="floating" 
              placeholder="Ingrese un número"
              ref="input2"
            ></ion-input>
          </ion-item>
        </ion-list>
        
        <ion-button 
          expand="block" 
          shape="round"
          @click="calcularSuma"
        >
          Calcular
        </ion-button>

        <ion-item v-if="resultado !== null">
          <ion-label>Resultado: {{ resultado }}</ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const titulo = "Sumadora";
const numero1 = ref("");
const numero2 = ref("");
const resultado = ref<number | null>(null);

const calcularSuma = () => {
  // Convertimos los valores a números
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);
  
  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor ingrese números válidos");
    return;
  }
  
  resultado.value = n1 + n2;
  
  // Limpiamos los inputs
  numero1.value = "";
  numero2.value = "";
};

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonLabel
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
  padding: 16px;
}

#container ion-button {
  margin: 20px 0;
}

#container ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
</style>