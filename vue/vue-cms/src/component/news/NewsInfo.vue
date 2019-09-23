<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论子组件区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcom/comment.vue' 
    export default {
        data() {
            return {
                id: this.$route.params.id,
                newsinfo: {}
            }
        },
        created() {
            this.getNewsInfo();
            console.log(this.id)
        },
        methods: {
            getNewsInfo:function () {
                this.$http.get('getnew/' + this.id).then(result => {
                    var index = this.id
                    console.log(result.body.message)
                    if(result.body.status === 0) {
                        this.newsinfo = result.body.message[index]
                    }
                })
            }
        },
        components:{"comment-box":comment}
    }
</script>

<style lang="less" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
      height: 300px;
    img {
      width: 100%;
    }
  }
}
</style>