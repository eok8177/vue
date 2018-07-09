<template>
  <div>
    <app-work v-for="work in works" :key="work.id" :work="work" :lpz="lpz" :cat="cat" @workDeleted="onWorkDeleted($event)" ></app-work>
  </div>
</template>

<script>
import Work from "./work.vue";
import axios from 'axios';
export default {
    data() {
        return {
            works: [],
            lpz: [],
            cat: []
        }
    },
    created: function() {
        axios.get('http://ek.ks.ua/api/works')
            .then(
                (response) => {
                    this.works = response.data.work;
                    this.lpz = response.data.lpz;
                    this.cat = response.data.cat;
                }
            )
            .catch(
                (error) => console.log(error)
            );
    },
    methods: {
        onWorkDeleted(id) {
            const position = this.works.findIndex((element) => {
                return element.id == id;
            });
            this.works.splice(position, 1);
        }
    },
    components: {
        'app-work': Work
    }
}
</script>
