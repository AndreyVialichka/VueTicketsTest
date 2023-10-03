<template>
    <div class="profile">
      
        <h1>Профиль</h1>

        <ProfileName :firstName="profile.firstName" />
        <ProfileLastName :lastName="profile.lastName" />
        <ProfileDescription :description="profile.description" />  
        <ProfileBirthDate />
        <ProfileSelectCity />  
    </div>
  </template>
  
<script setup>

  import { useProfileStore } from '~/stores/profile'
  const profileStore = useProfileStore()
  const profile = profileStore.profile
    
</script>

<style scoped >

.profile{
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border: 1px solid aquamarine;
  border-radius: 15px;

}

h1{
  font-size: large;
  font-weight: bold;
}


</style>