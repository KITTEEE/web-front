function my$(id) {
    return document.getElementById(id);
}

function setInerText(element, content) {
    if (typeof element.innerText == "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

// 获得时间差
function getInterval(start, target) {
    var interval = Math.round((target - start) / 1000);
    var day = Math.round(interval / 60 / 60 / 24)
    var hours = Math.round(interval / 60 / 60 % 24);
    var mins = Math.round(interval / 60 % 60);
    var seconds = Math.round(interval % 60)
    return {
        day: day,
        hours: hours,
        mins: mins,
        seconds: seconds
    }
}

// 处理 scroll 兼容性问题
function getScroll(e) {
    var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollX,
        scrollY
    }
}

// 处理 e.pageX 兼容性问题
function getPage(e) {
    var pageX = e.clientX + getScroll(e).scrollX;
    var pageY = e.clientY + getScroll(e).scrollY;
    return {
        pageX,
        pageY
    }    
}