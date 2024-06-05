<template>
    <div>
        <p> {{ name }}</p>
        <p> {{ age }}</p>
        <p> {{ car.brand }}</p>
        <p> {{ car.price }}</p>
        <button @click="buy">购买</button>
    </div>
</template>

<script setup>
let name = 'zhangsan'
let age = 18
let car = {
    brand: 'benchi',
    price: 777
}
function buy() {
    console.log(1);
}
</script>

<style lang="scss" scoped>

</style>