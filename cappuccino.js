/**
 * Created by gang.li on 14-5-03.
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
$.randomArray = function (arr) {
    arr = arr.sort(function () {
        return 0.5 > Math.random();
    });
    return arr;
}
$.getRandomArray = function (len) {
    var _arrR = [];
    for (var i = 0; i < len; i++) {
        _arrR.push(i);
    }
    i = 0;
    for (; i < len; i++) {
        var _r = Math.floor(Math.random() * (len - i));
        var _temp = _arrR[_r];
        _arrR[_r] = _arrR[len - 1 - i];
        _arrR[len - 1 - i] = _temp;
    }
    return _arrR;
}
$.htmlEncode = function (str) {
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
$.htmlDecode = function (str) {
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
$.floatToint = function (float) {
    return ~~(float);
}
$.getUrlPrmt = function (url) {
    url = url ? url : window.location.href;
    var _pa = url.substring(url.indexOf('?')), _arrS = _pa.split('&'), _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
        var pos = _arrS[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        var name = _arrS[i].substring(0, pos), value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}
/**
 * var htmlTemp = '<p><span>{d1}</span><span>{d2}</span><span>{d3.id.u}</span></p>';
 **/
$.tempExt = function (h, data) {
    return h.replace(/\{(.*?)\}/g, function (str, m) {
        var arrM = m.split('.'),
            t = data[arrM.shift()];
        for (var i = 0, _len = arrM.length; i < _len; i++) {
            t = t[arrM[i]];
        }
        return t === undefined || t === null ? '' : t;
    });
}
$.cookie = function (name, value, options) {
    var d = document;
    if (typeof value != 'undefined') {
        options = options || ( {});
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && ( typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + options.path : '; path=/';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        d.cookie = [name, '=', window.encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (d.cookie && d.cookie != '') {
            var cookies = d.cookie.split(';');
            for (var i = 0, _len = cookies.length; i < _len; i++) {
                var cookie = $.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = window.decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}
/**
 * 1389596170000=>2014-01-06 09:55:53
 **/
$.dateformat = function (value, type) {
    if (!type) {
        type = value;
        value = new Date();
    }
    if ($.type(value) !== "date") {
        value = new Date();
    }
    return type.replace(/yyyy/g, value.getFullYear()).replace(/mm/g, (value.getMonth() + 1) < 10 ? "0" + (value.getMonth() + 1) : value.getMonth() + 1).replace(/dd/g, value.getDate() < 10 ? "0" + value.getDate() : value.getDate()).replace(/HH/g, value.getHours() < 10 ? "0" + value.getHours() : value.getHours()).replace(/MM/g, value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes()).replace(/SS/g, value.getSeconds() < 10 ? "0" + value.getSeconds() : value.getSeconds());
}
