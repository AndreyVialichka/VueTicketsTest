<template>
    <div>
        <label for="city">Город:</label>
        <select v-model="profile.city">
          <option v-for="cityItem in cityArray" >{{ cityItem }}</option>
        </select>
    </div>
</template>

<script setup>
import { useProfileStore } from '~/stores/profile'
import { storeToRefs } from 'pinia'; 


const { profile } = storeToRefs(useProfileStore()); 
const cityArray = ref( ['Minsk','Mosckow','Kiev','ST.Pt','Toronto'] )

</script>