/* 模仿jquery中的ajax */
function ajax(obj) {
    //设置默认参数
    var defaults = {
        type: 'get',
        data: {},
        url: '#',
        dataType: 'text',
        async: true,
        success: function (data) {
            console.log(data);
        }
    }
    //处理形参，传入参数的时候覆盖默认参数，不传递就使用默认参数
    for (var key in obj) {
        defaults[key] = obj[key];
    }
    //1 创建XMLHttpRequest对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    /* 
        把对象形式的参数转化为字符串形式的参数
        {'username':'zhangsan','password':123}
        转换为
        username=zhangsan&password=123
    */
    var param = '';
    for (var attr in obj.data) {
        param = param + attr + '=' + obj.data[attr] + '&';
    }
    if(param){
        param = param.substring(0,param.length-1);
    }
    //处理get请求的乱码问题
    if(defaults.type == 'get') {
        defaults.url = defaults.url + '?' + encodeURI(param); 
    }
    //2 准备发送
    xhr.open(defaults.type,defaults.url,defaults.async);
    var data = null;
    if(defaults.type == 'post'){
        data = param;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    //3 执行发送动作
    xhr.send(data);
    //处理同步请求，不会调用回调函数
    if(!defaults.async){
        if(defaults.dataType == 'json'){
            return JSON.parse(xhr.responseText);
        }else{
            return xhr.responseText;
        }
    }
    //4 指定回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200) {
                var data = xhr.responseText;
                if(defaults.dataType == 'json'){
                    data = JSON.parse(data);
                }
                defaults.success(data);
            }
        }
    }
}