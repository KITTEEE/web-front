function ajax(type,url,param,dataType,callback){
    // console.log(type);
    // console.log(url);
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new new ActiveXObject("MirsoftXMLHTTP");
    }
    // console.log(xhr);
    if (type == 'get') {
        url = url + '?' + param;
    }
    xhr.open(type,url,true);
    var data = null;
    if(type == 'post'){
        data = param;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    
    xhr.send(data);
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);
        if (xhr.readyState == 4) {
            // console.log(xhr.status);
            if (xhr.status == 200) {
                var data = xhr.responseText;
                console.log(data);
                if(dataType == 'json'){
                    data = JSON.parse(data);//将字符串转换为json格式数据
                    console.log(data);
                }
                callback(data);
            }
        }
    }


}