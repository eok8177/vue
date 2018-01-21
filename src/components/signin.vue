<template>
  <form>
      <div>
          <label for="username">Login</label>
          <input type="text" id="username" name="username" v-model="username">
      </div>
      <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" v-model="password">
      </div>
      <button type="submit" @click.prevent="signin">Sign In</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
      return {
          username: '',
          password: ''
      }
  },
  methods: {
      signin() {
        axios.post('http://lara.local/api/user/signin', 
            {username: this.username, password: this.password},
            {headers: {'X-Requested-With':'XMLHttpRequest'}})
            .then(
                (response) => {
                    const token = response.data.token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-','+').replace('_','/');
                    console.log(JSON.parse(window.atob(base64)));
                    localStorage.setItem('token', token);
                }
            )
            .catch(
                (error) => console.log(error)
            );
      }
  }
}
</script>
