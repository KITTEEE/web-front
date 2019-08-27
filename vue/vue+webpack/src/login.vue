<template>
    <div>
        <h1>这是一个登录组件---{{msg}}</h1>
    </div>
</template>

<script>
export default {
    /* 组件中的 data 需要使用函数 */
    data() {
        return {
            msg:'123'
        }
    },
    methods: {
        show() {
            console.log('hello')
        }
    },
}

</script>

<style>
    
</style>