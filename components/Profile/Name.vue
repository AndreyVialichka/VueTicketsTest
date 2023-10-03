<template>
    <div class="first Name">
        <h3>  Имя: <b> {{  firstName }} </b>  </h3>
      </div>
</template>

<script setup>
const props = defineProps({
    firstName:String
})
</script>