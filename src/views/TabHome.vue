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
      <ion-router-link href="/tabs/hist">
        <ion-card>
          <ion-item>
            <ion-label>
              <ion-icon :icon="pinOutline" slot="start"></ion-icon>
              Riwayat
            </ion-label>
          </ion-item>
          <ion-card-content>
            Lihat Riwayat kehadiran dalam bulan ini.
          </ion-card-content>
        </ion-card>
      </ion-router-link>

      <ion-router-link href="/tabs/att">
        <ion-card>
          <ion-item>
            <ion-label>Lakukan Presensi</ion-label>
          </ion-item>
          <ion-card-content>
            Catat kehadiran kamu hari ini di tab Absensi.
          </ion-card-content>
        </ion-card>
      </ion-router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { pinOutline } from "ionicons/icons";
import {
  IonPage,
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
  name: "Home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,

    IonCard,
    IonItem,
    IonLabel,
    IonCardContent,
  },
  setup() {
    return {
      pinOutline,
    };
  },
};
</script>