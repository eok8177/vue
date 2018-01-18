<template>
  <div>
      <p>
          {{ lp.name }}
      </p>
      <div>
          <input type="text">
          <a href="" @click="onUpdate">Save</a>
          <a href="" @click="onCancel">Cancel</a>
      </div>
      <div>
          <a href="" @click="onEdit">Edit</a>
          <a href="" @click="onDelete">Delete</a>
      </div>
  </div>
</template>

<script>
export default {
    props: ['lp']
}
</script>
