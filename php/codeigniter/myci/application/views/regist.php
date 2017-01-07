<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <base href="<?php echo site_url(); ?>">
</head>
<body>
    <h1>用户注册</h1>
    <form action="user/regist" method="post">
        用户名: <input type="text" name="username" ><span id="tip"></span><br>
        密码: <input type="password" name="password"><br>
        <input type="submit" value="注册" name="regist">
    </form>

    <script src="javascript/jquery-1.12.4.js"></script>
    <script>
        $(function(){
            var $un = $("input[name=username]");
            var $tip = $("#tip");
            var $regist = $("input[name=regist]");
            $un.on("blur", function(){
                $.get("user/check_username", {
                    "username": $un.val()
                }, function(res){
                    if(res == "success"){
                        $tip.html("该用户名可用");
                        $regist.removeAttr("disabled");
                    }else{
                        $tip.html("该用户名已存在");
                        $regist.attr("disabled", "true");
                    }
                });
            });



        });


    </script>
</body>
</html>