<template>
    <div>
        <label for="birthdate">Дата рождения:</label>
        <input type="date" id="birthdate" v-model="profile.birthdate" required>
      </div>
</template>

<script setup>
 import { useProfileStore } from '~/stores/profile'
 import { storeToRefs } from 'pinia'; 

 const { profile } = storeToRefs(useProfileStore()); 

</script>