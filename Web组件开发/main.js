require(['dialog'], function (Dialog) {

    $('#btn').on('click', function () {
        var dialog = new Dialog({
            width: 400,
            height: 300
        });
        dialog.on('ok', function () {
            alert('点了确定!');
        });
    });


});