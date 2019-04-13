function ajax(obj){
    var defaults = {
        type:'get',
        url:'#',
        async:true,
        data:{},
        dataType:'text',
        jsonpCallback:'callback',
        success:function (data) { 
            console.log(data);    
        }
    }
    //参数覆盖
    for (var key in obj) {
        defaults.[key] = obj.[key];
    }
    if(defaults.dataType == 'jsonp'){
        ajax4Jsonp(defaults);
    }else{
        ajax4Json(defaults);
    }
}

function ajax4Json(obj){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var param = '';
    for (var attr in obj.data) {
        param = param + attr + '=' + obj.data[attr] + '&';
    }
    if(param){
        param = param.substring(0,param.length-1);
    }
    //处理get请求的乱码问题
    if(obj.type == 'get') {
        obj.url = obj.url + '?' + encodeURI(param); 
    }
    xhr.open(obj.type,obj.url,obj.async);
    var data = null;
    if(obj.type == 'post'){
        data = param;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    //3 执行发送动作
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                
            }
        }
    }
}

function ajax4Jsonp(obj){
    
}