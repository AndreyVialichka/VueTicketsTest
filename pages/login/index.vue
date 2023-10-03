<template>
    <div class="wrapper">
      <form @submint.prevent="login" class="form">
        <div class="title">
          <h2>SIGN IN</h2>
        </div>
        <label for="uname" class="label">Username</label>
        <input
          v-model="user.username"
          type="text"
          class="input"
          placeholder="Enter Username"
          name="uname"
          required
        />
  
        <label for="psw" class="label" >Password</label>
        <div class="input">
          <input
            v-model="user.password"
            :type="showPassword ? 'text': 'password'"
            class="password-input"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button 
            type="button"
            class="show-btn" 
            @click="showPassword = !showPassword">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
        </div>
  
        <button @click.prevent="login" class="button">Login</button>
      </form>
    </div>
  </template>


<script setup>
import { storeToRefs } from 'pinia'; 
import { useAuthStore } from '~/stores/auth'; 

const { authenticateUser } = useAuthStore(); 

const { authenticated } = storeToRefs(useAuthStore()); 

const user = ref({
  username: '', 
  password: '',
});

const showPassword = ref(false)


const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    navigateTo('/');
  }
};
</script>


<style scoped>
.wrapper{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 90vw;
 height: 90vh;
 
}

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  border: 1px solid teal;
  border-radius: 10px;
  
}

label {
  align-self: flex-start;
  color: green;
  font-size: larger;
}

.input {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  width: 100%;
}

.button {
  width: 100%;
  border: 1px solid aquamarine;
  background-color: aquamarine;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
}

.password-input{
  outline: none;
}

.show-btn{
  width: 40px;
  margin-right: 5px;
}

</style>