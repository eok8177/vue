<template>
  <div id="app">
    <router-link to="/">Works</router-link> |
    <router-link to="/lpz">Lpz</router-link> |
    <router-link to="/signin">Signin</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  padding: 15px;
}
.nav a {
  padding: 0 15px;
}
button, input, textarea, select {
    margin-top: 10px;
}

.table {
  border-bottom: 1px solid #eee;
}
.table .body {
  border-bottom: 1px dashed #eee;
}
.table .footer {
    padding: 10px;
    text-align: right;
}
.table .footer a {
    font-size: 10px;
    text-decoration: none;
}
.date {
    font-size: 12px;
}
.summ {
    font-size: 14px;
    color:blue;
}
.invoice {
    font-size: 12px;
    color: darkgoldenrod;
}
.description {
    display: block;
    font-size: 12px;
    padding: 5px;
}
.lpz {
    font-size: 10px;
    color: grey;
}
.cat {
    font-size: 10px;
    color: grey;
}

.edit {
    text-align: left;
}

</style>
