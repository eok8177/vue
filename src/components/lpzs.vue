<template>
  <div>
      <button class="btn" @click="onGetLpz">Get Lpz</button>
      <hr>
      <app-lpz v-for="lpz in lpzs" :key="lpz.id" :lp="lpz" @lpzDeleted="onLpzDeleted($event)" ></app-lpz>
  </div>
</template>

<script>
import Lpz from "./lpz.vue";
import axios from 'axios';
export default {
    data() {
        return {
            lpzs: []
        }
    },
    methods: {
        onGetLpz() {
            axios.get('http://lara.local/api/lpz')
                .then(
                    (response) => {
                        this.lpzs = response.data.lpz;
                    }
                )
                .catch(
                    (error) => console.log(error)
                );
        },
        onLpzDeleted(id) {
            const position = this.lpzs.findIndex((element) => {
                return element.id == id;
            });
            this.lpzs.splice(position, 1);
        }
    },
    components: {
        'app-lpz': Lpz
    }
}
</script>
