<template>
    <div>
        <button @click="increment">{{ count }}</button>
        <button @click="state.count++">{{ state.count }}</button>
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
const count = ref(0)
function increment(){
    count.value++
}
const obj = ref({
    nested: {count : 0},
    arr: ['foo','bar']
})
function mutateDeeply(){
    obj.value.nested.count++
    obj.value.arr.push('baz')
}
const state = reactive({count:0})
</script>

<style lang="scss" scoped>

</style>