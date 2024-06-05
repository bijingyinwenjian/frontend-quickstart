<template>
    <div class="car">
    <h2>优惠券：{{ car.coupon }} 张</h2>
    <h2>数量：{{ car.num }}</h2>
    <h2>单价：{{ car.price }}</h2>
    <h1>总价：{{totalPrice}}</h1>
    <button @click="getCoupon">获取优惠</button>
    <button @click="addNum">加量</button>
    <button @click="changePrice">加价</button>
  </div>
</template>

<script setup>
import {computed, reactive, toRef, toRefs} from "vue";

//省略基础代码
const car = ({
    coupon:10,
    num: 101,
    price : 777
})
function addNum(){
    car.num++
}
function changePrice(){
    car.price++
}
function getCoupon(){
    car.coupon
}

const totalPrice = computed(()=>{
  return price.value * num.value - coupon.value*100
})

</script>

<style lang="scss" scoped>

</style>