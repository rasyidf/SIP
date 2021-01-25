<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Riwayat Kehadiran</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Riwayat Kehadiran</ion-title>
        </ion-toolbar>
      </ion-header>
      <attendance-history-item-card v-for="i in histories" :key="i.key"  :masuk="i.masuk" :keluar="i.keluar"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, 
} from "@ionic/vue";
import AttendanceHistoryItemCard from "@/components/AttendanceHistoryItemCard.vue";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage, 
    AttendanceHistoryItemCard,
  },
  data: function () {
    return {
      histories: [
        { key: 1, masuk: new Date(2021,0,1, 8, 0,0), keluar: new Date(2021,1,1, 15, 0, 0) },
        { key: 1, masuk: new Date(2021,0,2, 8, 0,0), keluar: new Date(2021,1,2, 15, 0, 0) },
        { key: 1, masuk: new Date(2021,0,3, 8, 0,0), keluar: new Date(2021,1,3, 15, 0, 0) },
        { key: 1, masuk: new Date(2021,0,4, 8, 0,0), keluar: new Date(2021,1,4, 15, 0, 0) }, 
      ],
    };
  },
};
</script>