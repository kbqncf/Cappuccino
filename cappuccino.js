/**
 * Created by gang.li on 14-6-17.
 */
function $(id) {
    if (id) {
        return new Cappuccino(id);
    }
}
function Cappuccino(id) {
    this.id = id;
    this.obj = document.getElementById(id);
    return this;
}
Cappuccino.prototype.val = function (v) {
    if (v == undefined) {
        return this.obj.value;
    }
    else {
        this.obj.value = v;
        return this;
    }
}
Cappuccino.prototype.text = function (text) {
    if (text == undefined) {
        return this.obj.innerHTML;
    } else {
        this.obj.innerHTML = text;
        return this;
    }
}
Cappuccino.prototype.append = function (text) {
    if (text == undefined) {
        return this.obj.innerHTML;
    } else {
        this.obj.innerHTML += text;
        return this;
    }
}
Cappuccino.prototype.href = function (link) {
    if (link == undefined) {
        return this.obj.href;
    } else {
        this.obj.href = link;
        return this;
    }
}
Cappuccino.prototype.src = function (link) {
    if (link == undefined) {
        return this.obj.src;
    } else {
        this.obj.src = link;
        return this;
    }
}
Cappuccino.prototype.style = function (styleName, styleValue) {
    if (!styleValue) {
        return this.obj.style.styleName;
    } else {
        eval("this.obj.style." + styleName + "='" + styleValue + "'");
        return this;
    }
}
Cappuccino.prototype.show = function () {
    this.obj.style.display = 'block';
    return this;
}
Cappuccino.prototype.hide = function () {
    this.obj.style.display = 'none';
    return this;
}
Cappuccino.prototype.click = function (fun) {
    this.bind('click', fun);
    return this;
}
Cappuccino.prototype.keydown = function (fun) {
    this.bind('keydown', fun);
    return this;
}
Cappuccino.prototype.bind = function (evname, fun) {
    if (!fun) {
    } else {
        if (evname == "dragstart") {//16:10
            this.obj.draggable = true;
        }
        this.obj.addEventListener(evname, fun);
        return this;
    }
}
Cappuccino.prototype.focus = function () {
    this.obj.focus();
    return this;
}
$.cort_array = function (array) {
    array = array.sort(function () {
        return 0.5 > Math.random();
    });
    return array;
}
$.html_encode = function (str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}
$.html_decode = function (str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
}

$.saveObj = function (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}
$.openObj = function (key) {
    return JSON.parse(localStorage.getItem(key));
}
$.delObj = function (key) {
    localStorage.removeItem(key);
}
$.clearObj = function () {
    localStorage.clear();
}
$.checkTel = function (str) {
    var regPartton = /1[3-8]+\d{9}/;
    if (!str || str == null) {
        return "手机号码不能为空！";
    } else if (!regPartton.test(str)) {
        return "手机号码格式不正确！";
    } else {
        return true;
    }
}
$.isEmail = function (str) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    return reg.test(str);
}
$.isMob = function (fun) {
    if (navigator.userAgent.indexOf('Mobile') != -1) {
        fun();
    }
}
$.isMobElse = function (mofun, pcfun) {
    if (navigator.userAgent.indexOf('Mobile') != -1) {
        mofun();
    } else {
        pcfun();
    }
}

$.jsonp = function (url, callbackname) {
    var s = document.createElement("script");
    s.src = url + callbackname;
    document.getElementsByTagName("body").item(0).appendChild(s);
}
$.setResizeBackGround = function (src) {
    var img = document.createElement('img');
    img.id = "resizebackgroundimg";
    img.style.position = 'fixed';
    document.getElementsByTagName("body").item(0).appendChild(s);
    window.onresize = function () {
        var bw = document.documentElement.clientWidth;
        var bh = document.documentElement.clientHeight;
        document.getElementById("resizebackgroundimg").style.left = '0px';
        document.getElementById("resizebackgroundimg").style.top = '0px';
        document.getElementById("resizebackgroundimg").width = parseInt(bw);
        document.getElementById("resizebackgroundimg").height = parseInt(bh);
    }
}
$.randomStr = function (len) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}
$.float2int = function (float) {
//    return (float) | 0;
    return ~~ (float);
}
$.ab2ba = function (a, b) {
    a = [b, b = a][0];
    return [a, b];
}