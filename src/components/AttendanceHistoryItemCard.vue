<template>
  <ion-card>
    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col size="3"> 
             <ion-icon  size="large" :icon="ellipseOutline" />
          </ion-col>
          <ion-col>
            <ion-grid>
              <ion-row>
                <ion-col size="12">
                  {{ currentDate }}
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>Masuk</ion-col>
                <ion-col>{{ InDate  }}</ion-col>
              </ion-row>
              <ion-row>
                <ion-col>Keluar</ion-col>
                <ion-col>{{ OutDate }}</ion-col>
              </ion-row>
            </ion-grid>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent, computed } from 'vue';
import {IonGrid, IonRow, IonCol,IonIcon , IonCard, IonCardContent} from "@ionic/vue";
import { ellipseOutline } from 'ionicons/icons';
export default defineComponent ({
  name: "AttendanceHistoryItemCard",
  components: {IonGrid, IonRow, IonCol, IonIcon , IonCard, IonCardContent},
  props: { 
    masuk: {
      type: Date,
      required: true
    },
    keluar: {
      type: Date,
      required: true
    },
  }, 
  setup(props) {  
    const masuk = moment(props.masuk);
    const currentDate = computed( ()=> masuk.format("DD-MM-YYYY") );
    const InDate = computed( ()=> masuk.format("hh:mm") );
    const OutDate = computed( ()=> moment(props.keluar).format("HH:mm") );
    
    return { ellipseOutline, currentDate,InDate, OutDate };
  }
});
</script>

<style scoped>
</style>