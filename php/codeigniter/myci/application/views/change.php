<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <base href="<?php echo site_url(); ?>">
</head>
<body>
    <h1>用户修改</h1>

    <form action="user/update_user" method="post">
        用户名: <input type="text" name="username" value="<?php echo $user->username;?>"><br>
        密码: <input type="password" name="password" value="<?php echo $user->password;?>"><br>
        <input type="hidden" name="user_id" value="<?php echo $user->user_id?>">
        <input type="submit" value="修改">
    </form>

</body>
</html>