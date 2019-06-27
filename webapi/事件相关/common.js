function my$(id) {
    return document.getElementById(id);
}

function setInnerText(element, content) {
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}


// 处理事件注册的兼容性问题
function addEventListener(element, eventName, fn) {
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
    } else {
        element['on' + eventName] = fn;
    }
}

// 处理事件移除的兼容性问题
function removeEventListener(element, eventName, fn) {
    if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);
    } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, fn);
    } else {
        element['on' + eventName] = null;
    }
}

/* pageX,pageY 兼容性处理 */
function getScroll() { // 获取页面滚动的距离：
    var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollX: scrollX,
        scrollY: scrollY
    }
}
function getPageScroll(e) {
    e = e || window.event;
    var pageX = e.pageX || e.clientX + getScroll().scrollX;
    var pageY = e.pageY || e.clientY + getScroll().scrollY;
    return {
        pageX: pageX,
        pageY: pageY
    };
}