<template>
  <div>
      <p>
          {{ lp.name }}
      </p>
      <div v-if="editing">
          <input type="text" v-model="nameValue">
          <button class="btn" @click="onUpdate">Save</button>
          <button class="btn" @click="onCancel">Cancel</button>
      </div>
      <div v-if="!editing">
          <button class="btn" @click="onEdit">Edit</button>
          <button class="btn" @click="onDelete">Delete</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['lp'],
    data() {
        return {
            editing: false,
            nameValue: this.lp.name
        }
    },
    methods: {
        onEdit() {
            this.editing = true;
            nameValue = this.lp.name;
        },
        onCancel() {
            this.editing = false;
        },
        onDelete() {
            const token = localStorage.getItem('token');
            this.$emit('lpzDeleted', this.lp.id);
            axios.delete('http://lara.local/api/lpz/' + this.lp.id + '?token=' + token)
                .then(
                    (response) => console.log(response)
                )
                .catch(
                    (error) => console.log(error)
                );
        },
        onUpdate() {
            const token = localStorage.getItem('token');
            this.editing = false;
            this.lp.name = this.nameValue;
            axios.put('http://lara.local/api/lpz/' + this.lp.id+ '?token=' + token, {name: this.nameValue})
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
