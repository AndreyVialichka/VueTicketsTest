<template>
    <div>
        <label for="city">Город:</label>
        <select v-model="city">
          <option v-for="cityItem in cityArray" >{{ cityItem }}</option>
        </select>
    </div>
</template>

<script setup>
import { useProfileStore } from '~/stores/profile'
const profileStore = useProfileStore()
const city = profileStore.profile.city
const cityArray = ref( ['Minsk','Mosckow','Kiev','ST.Pt','Toronto'] )

</script>