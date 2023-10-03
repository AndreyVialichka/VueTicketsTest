<template>
    <div class="last Name">
        <h3> 
             Описание: 
             <b> {{  description }} </b>  
        </h3>
      </div>
</template>

<script setup>
const props = defineProps({
    description:String
})
</script>