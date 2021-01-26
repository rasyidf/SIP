<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/att">
          <ion-icon :icon="personOutline" />
          <ion-label>Absensi</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/hist">
          <ion-icon :icon="listOutline" />
          <ion-label>Riwayat</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/report">
          <ion-icon :icon="chatboxEllipsesOutline" />
          <ion-label>Laporan</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  personOutline,
  listOutline,
  homeOutline,
  chatboxEllipsesOutline,
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      personOutline,
      listOutline,
      homeOutline,
      chatboxEllipsesOutline,
    };
  },
};
</script>