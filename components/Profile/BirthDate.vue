<template>
    <div>
        <label for="birthdate">Дата рождения:</label>
        <input type="date" id="birthdate" v-model="birthdate" required>
      </div>
</template>

<script setup>
 import { useProfileStore } from '~/stores/profile'
const profileStore = useProfileStore()
const birthdate = profileStore.profile.birthdate

</script>