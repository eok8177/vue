<template>
  <form @submit.prevent="onSubmitted">
      <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="lpzName">
      </div>
      <button class="btn" type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
      return {
          lpzName: ''
      }
  },
  methods: {
      onSubmitted() {
          axios.post('http://lara.local/api/lpz', {name: this.lpzName})
            .then(
                (response) => console.log(response)
            )
            .catch(
                (error) => console.log(error)
            );
      }
  }
}
</script>

