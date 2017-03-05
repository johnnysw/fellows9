define(['jquery'], function ($) {
    function Dialog(options) {
        var _this = this;
        this.mask = $('<div class="dialog-mask"></div>');
        this.wrapper = $('<div class="dialog-wrapper"></div>');
        this.header = $('<div class="dialog-header">这是一个窗口</div>')
        this.closeBtn = $('<span class="dialog-close-btn">X</span>');
        this.body = $('<div class="dialog-body">hehe</div>');
        this.footer = $('<div class="dialog-footer"></div>');
        this.okBtn = $('<button class="btn-ok">确定</button>');

        this.closeBtn.appendTo(this.header)
            .on('click', function () {

            });
        this.okBtn.appendTo(this.footer)
            .on('click', function () {
                _this.fire('ok');
            });
        this.wrapper.css({
            width: options.width,
            height: options.height,
            marginLeft: -options.width/2,
            marginTop: -options.height/2
        });
        this.wrapper.append(this.header).append(this.body).append(this.footer);

        $(document.body).append(this.mask).append(this.wrapper);

        this.handler = {};
    }

    Dialog.prototype.on = function (type, handler) {
        if(!this.handler[type]){
            this.handler[type] = handler;
        }
    };
    Dialog.prototype.fire = function (type) {
        this.handler[type]();
    };

    return Dialog;
});