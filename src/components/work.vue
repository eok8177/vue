<template>
  <div class="table">
    <div class="body">
        <span class="date">{{ work.created_at }}</span>
        <span class="summ">{{ work.summ }} грн.</span>
        <span class="invoice">{{ work.invoice }}</span>
        <span class="description">{{ work.description }}</span>
        <span class="cat">{{ cat[work.cat_id].name }}</span>
        <span class="lpz">{{ lpz[work.lpz_id].name }}</span>
    </div>

    <div class="footer">
        <div v-if="editing" class="edit">
            <form>
                <div>
                    <label for="invoice">Invoice</label>
                    <input type="text" id="invoice" name="invoice" v-model="work.invoice" />
                </div>
                <div>
                    <label for="summ">Summ </label>
                    <input type="text" id="summ" name="summ" v-model="work.summ" />
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea id="description" name="description" cols="20" rows="2" v-model="work.description"></textarea>
                </div>

                <div>
                    <select class="form-control" name="cat_id" v-model="work.cat_id" >
                        <option v-for="item in cat" v-bind:value="item.id">
                            {{item.name}}
                        </option>
                    </select>

                    <select class="form-control" name="lpz_id" v-model="work.lpz_id" >
                        <option v-for="item in lpz" v-bind:value="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>

                <button class="btn" @click="onUpdate">Save</button>
                <button @click="onCancel()">Cancel</button>
            </form>

        </div>
        <div v-if="!editing">
            <button class="btn" @click="onEdit">Edit</button>
            <button class="btn" @click="onDelete">Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['work', 'lpz', 'cat'],
    data() {
        return {
            editing: false,
            nameValue: this.work.name
        }
    },
    methods: {
        onEdit() {
            this.editing = true;
            nameValue = this.work.name;
        },
        onCancel() {
            this.editing = false;
        },
        onDelete() {
          if (confirm("Are you sure to delete " + this.work.invoice)) {
            const token = localStorage.getItem('token');
            this.$emit('workDeleted', this.work.id);
            axios.delete('http://ek.ks.ua/api/work/' + this.work.id + '?token=' + token)
                .then(
                    (response) => console.log(response)
                )
                .catch(
                    (error) => console.log(error)
                );
          }
        },
        onUpdate() {
            const token = localStorage.getItem('token');
            this.editing = false;
            this.work.name = this.nameValue;
            axios.put('http://ek.ks.ua/api/work/' + this.work.id+ '?token=' + token, {name: this.nameValue})
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
