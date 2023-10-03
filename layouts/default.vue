<template>
    <div class="wrapper">
        <Header />
        <slot/>
    </div>    
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.wrapper{
    background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

</style>