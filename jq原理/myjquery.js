function getStyle(elem, prop) {
    if (elem.currentStyle) {
        return elem.currentStyle[prop];
    } else if (getComputedStyle) {
        return getComputedStyle(elem, false)[prop];
    } else {
        return elem.style[prop];
    }
}

function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, handler)
    } else {
        elem['on' + type] = handler;
    }
}


function $(args) {
    return new MyJQuery(args);
}

function MyJQuery(args) {
    this.elements = [];
    switch (typeof args) {
        case 'function':
            addEvent(window, 'load', args);
            break;
        case 'string':
            var firstLetter = args.charAt(0);
            switch (firstLetter) {
                case '#'://#xxx
                    this.elements.push(document.getElementById(args.substring(1)));
                    break;
                case '.':
                    this.elements = document.getElementsByClassName(args.substring(1));
                    break;
                default:
                    this.elements = document.getElementsByTagName(args);
            }
            break;
        case 'object':
            this.elements.push(args);
            break;
    }
}

MyJQuery.prototype.addClass = function (clsName) {
    for (var i = 0; i < this.elements.length; i++) {
        var re = new RegExp('\\b' + clsName + '\\b', 'g');
        if (!re.test(this.elements[i].className)) {
            this.elements[i].className += ' ' + clsName;
            this.elements[i].className = MyJQuery.trim(this.elements[i].className);
        }
    }
    return this;
};

MyJQuery.prototype.width = function (length) {
    if (length) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.width = length + 'px';
        }
        return this;
    }
    return getStyle(this.elements[0], 'width');

};

MyJQuery.prototype.click = function (fn) {
    for (var i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], 'click', fn);
    }
    return this;
};

MyJQuery.prototype.on = function (type, selector, fn) {
    if (typeof selector == 'string') {
        for(var i=0; i<this.elements.length; i++){
            addEvent(this.elements[i], type, function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                switch (selector.charAt(0)){
                    case '#':
                        break;
                    case '.':
                        if(target.className == selector.substr(1)){
                            fn.apply(target);
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    } else {
        for (var i = 0; i < this.elements.length; i++) {
            addEvent(this.elements[i], type, fn);
        }
    }
    return this;
};

MyJQuery.prototype.siblings = function (selector) {
    var result = [];
    for (var i = 0; i < this.elements.length; i++) {
        var childs = this.elements[i].parentNode.children;
        for(var j=0; j<childs.length; j++){
            switch (selector.charAt(0)){
                case '#':
                    break;
                case '.':
                    if(childs[j].className == selector.substr(1)){
                        if(childs[j] != this.elements[i] && result.indexOf(childs[j]) == -1){
                            result.push(childs[j]);
                        }
                    }
                    break;
                default:
                    break;
            }

        }
    }
    return result;
};

MyJQuery.prototype.css = function (prop, value) {
    if(value){
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style[prop] = value;
        }
    }else{
        if(typeof prop == 'string'){
           return getStyle(this.elements[0], prop);
        }else if(typeof prop == 'object'){
            for(var p in prop){
                //p:background-color=>backgroundColor
                p = p.replace(/\-[a-z]/g, function (word) {
                    return word.substring(1).toUpperCase();
                });
                for (var i = 0; i < this.elements.length; i++) {
                    this.elements[i].style[p] = prop[p];
                }
            }
        }
    }
};

MyJQuery.trim = function (str) {
    var re = /^\s+|\s+$/g; // _abc_
    return str.replace(re, '');
};














