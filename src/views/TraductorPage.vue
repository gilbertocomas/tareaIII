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

        <ion-item>
          <ion-input
            label-placement="floating"  
            type="number" 
            v-model="numero"
            label="Número" 
            @keyup.enter="convertirALetras"
            placeholder="Ingrese un número entero entre 1 y 1000"
            clear-input>
          </ion-input>
        </ion-item>
        
        <ion-button 
          expand="block" 
          @click="convertirALetras"
          :disabled="!numeroValido"
          class="ion-margin-top calculate-button">
          Convertir a Letras
        </ion-button>
      </div>

      <ion-card v-if="numeroEnLetras">
        <ion-card-header>
          <ion-card-title>Resultado</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ numeroEnLetras }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonIcon,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  toastController 
} from '@ionic/vue';

const titulo = "Traductor Letras"
// Estado reactivo
const numero = ref('');
const numeroEnLetras = ref("");

const numeroValido = computed(() => {
  const num = Number(numero.value);
  return !isNaN(num) && num >= 1 && num <= 1000;
});

const convertirALetras = () => {
  const num = Number(numero.value);
  
  if (isNaN(num)) {
    numeroEnLetras.value = "Por favor ingrese un número válido";
    return;
  }

  if (num < 1 || num > 1000) {
    numeroEnLetras.value = "El número debe estar entre 1 y 1000";
    return;
  }

  numeroEnLetras.value = convertirNumeroALetras(Number(num));
};

const convertirNumeroALetras = (num) => {
  const unidades = [
    "", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"
  ];
  const decenas = [
    "", "diez", "veinte", "treinta", "cuarenta", "cincuenta", 
    "sesenta", "setenta", "ochenta", "noventa"
  ];
  const especiales = [
    "diez", "once", "doce", "trece", "catorce", "quince", 
    "dieciséis", "diecisiete", "dieciocho", "diecinueve",
    "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro",
    "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"
  ];
  const centenas = [
    "", "ciento", "doscientos", "trescientos", "cuatrocientos", 
    "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"
  ];

  if (num === 0) return "cero";
  if (num === 100) return "cien";
  if (num === 1000) return "mil";

  let resultado = "";

  // Centenas
  const c = Math.floor(num / 100);
  if (c > 0) {
    resultado += centenas[c] + " ";
  }

  // Decenas y unidades
  const resto = num % 100;
  if (resto > 0) {
    if (resto < 30 && resto >= 10) {
      resultado += especiales[resto - 10];
    } else {
      const d = Math.floor(resto / 10);
      const u = resto % 10;
      
      if (d > 0) {
        resultado += decenas[d];
        if (u > 0) {
          resultado += " y " + unidades[u];
        }
      } else if (u > 0) {
        resultado += unidades[u];
      }
    }
  }

  return resultado.trim();
};
</script>

<style scoped>
.input-container {
  max-width: 500px;
  margin: 0 auto;
}

.calculate-button {
  --background: var(--ion-color-secondary);
  --background-activated: var(--ion-color-secondary-shade);
  margin-bottom: 20px;
}

.result-card {
  max-width: 500px;
  margin: 20px auto 0;
  text-align: center;
  background: var(--ion-color-light);
}

.result-title {
  color: var(--ion-color-primary);
}

.result-content {
  font-size: 1.1em;
}

.final-result {
  font-size: 2.5em;
  font-weight: bold;
  color: var(--ion-color-secondary);
  margin-top: 10px;
}

/* Estilos para modo oscuro */
@media (prefers-color-scheme: dark) {
  .result-card {
    background: var(--ion-color-step-150);
  }
}
</style>