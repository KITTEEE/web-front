<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.userid">
                <div class="cmt-info">
                    第{{i+1}}楼：&nbsp;&nbsp;用户：{{item.username}} &nbsp;&nbsp; 发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            id:this.$route.params.id,
            comments:[],
            msg:''
        }
    },
    created() {
        this.getComment();
    },
    methods: {
        getComment:function(){
            this.$http.get('getcomments/' + this.id).then(result => {
                let data = result.body
                if(data.status === 0) {
                    this.comments = this.comments.concat(data.message)
                }else {
                    Toast("获取评论失败")
                }
            })
        },
        // 发表评论
        // 参数1： 请求的URL地址
        // 参数2： 提交给服务器的数据对象 { content: this.msg }
        // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
        postComment:function(){
            // 判断是否为空
            if(this.msg.trim().length === 0) {
                return Toast("评论不能为空")
            }
            this.$http.post('postcomments/' + this.id,{
                content:this.msg.trim()
            }).then(result => {
                // 拼接出一个评论对象
                var cmt = {
                    username:'XX',
                    add_time:Date.now(),
                    content:this.msg.trim()
                };
                // 发表评论的时候，前端发送数据给后端之后，先把伪数据插入到页面中
                this.comments.unshift(cmt);
            })
        }
    },
}
</script>
<style lang="less" scoped>
.cmt-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin-top: 5px;
    .cmt-item {
        font-size: 14px;
        .cmt-info {
            font-size: 12px;
            line-height: 30px;
            background-color: #ccc;
        }
        .cmt-body {
            line-height: 40px;
        }
    }
    }
}
</style>