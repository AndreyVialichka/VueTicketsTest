<template>
    <div class="last Name">
        <h3>  фамилия: <b> {{  lastName }} </b>  </h3>
      </div>
</template>

<script setup>
const props = defineProps({
    lastName:String
})
</script>