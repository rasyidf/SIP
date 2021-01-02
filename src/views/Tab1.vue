<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Beranda</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Beranda</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <ion-label>Riwayat</ion-label>

          <ion-button fill="outline" slot="end" href="/tabs/tab3"
            >Lihat</ion-button
          >
        </ion-item>

        <ion-card-content>
          Lihat Riwayat kehadiran dalam bulan ini.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item> 
          <ion-label>Lakukan Presensi</ion-label>
        </ion-item>

        <ion-card-content>
          Catat kehadiran kamu hari ini di tab Absensi
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { pin } from "ionicons/icons";
import {
  IonPage,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonCard,
    IonItem,
    IonLabel,
    IonCardContent,
  },
  setup() {
    return {
      pin,
    };
  },
};
</script>