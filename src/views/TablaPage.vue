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
        <strong class="capitalize">{{titulo}}</strong>

        <ion-list>
          <ion-item>
            <ion-input 
              v-model="inputValue"
              type="number"
              label="Número" 
              label-placement="floating" 
              placeholder="Ingrese un número"
            ></ion-input>
          </ion-item>
        </ion-list>

        <ion-button 
          expand="block" 
          shape="round" 
          @click="generarTabla"
        >
          Mostrar Tabla
        </ion-button>

        <ion-list v-if="mostrarTabla">
          <ion-item v-for="(num, index) in numerosBase" :key="index">
            {{ numeroActual }} x {{ num }} = {{ numeroActual * num }}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const titulo = "Tabla de Multiplicar";
const inputValue = ref(""); // Valor temporal del input
const numeroActual = ref(0); // Número que se usará para los cálculos
const mostrarTabla = ref(false); // Controla si mostrar la tabla
const numerosBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Array fijo

const generarTabla = () => {
  const num = Number(inputValue.value);
  if (isNaN(num)) {
    alert("Por favor ingrese un número válido");
    return;
  }
  numeroActual.value = num; // Actualizamos solo al hacer clic
  mostrarTabla.value = true; // Mostramos la tabla
};

// Importa TODOS los componentes de Ionic que estás usando
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
  IonButton
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

#container strong {
  font-size: 20px;
  line-height: 26px;
  display: block;
  margin-bottom: 20px;
}

ion-list {
  margin: 20px 0;
}

ion-button {
  margin: 20px 0;
}
</style>