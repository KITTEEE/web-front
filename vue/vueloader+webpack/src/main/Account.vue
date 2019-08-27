<template>
    <div>
        <h1>这是帐户组件</h1>
        <mt-button type="default" @click="show">default</mt-button>
        <router-link to="/account/goodlist">goodlist</router-link>
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            toastInstance:null
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList(){
            this.show();
            setTimeout(()=> {
                this.toastInstance.close();
            },3000)
        },
        show() {
            this.toastInstance = Toast({
                message: '加载资源中',
                position: 'top',
                duration: -1,
            });
        }
    }
}
</script>

<style lang="less" scoped>
/* 普通 style 标签无法解析 less sass 等预处理语言，需要给 style 标签指定 lang 属性才可以使用CSS预处理 */
/* scoped 相当于给每个组件都添加了一个作用域 实际上是在标签上添加了一个 data-v-xxx的这么一个属性 */
body{
    div{
        color: red;
    }
}
</style>
