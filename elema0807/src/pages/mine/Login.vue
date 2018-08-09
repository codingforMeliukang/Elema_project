<template>
    <div id="login">
        <div class="contont-box">
            <div class="contont">
                <div class="LoginHeader">
                    <div class="imgBox">
                        <img :src="imgUrl">
                    </div>
                    <div class="messageLogin-box">
                        <a href="javascript:;" class="messageLogin">短信登录</a>
                    </div>
                </div>
                <div class="loginBox">
                    <form>
                        <input type="tel" maxlength="11" placeholder="手机号">
                        <input type="tel" maxlength="8" placeholder="验证码">
                        <p class="agreement">温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意<a href="javascript:;">《用户服务协议》</a></p>
                        <button class="loginBtn">登录</button>
                    </form>
                    <a href="javascript:;" class="about">关于我们</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:'../../static/images/logo.jpg'
        }
    }
}
</script>

<style scoped>
#login {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;
}
.contont-box{
    height: auto;
    min-height: 100%;
    padding-top: 40px;
}
.contont{
    width: 300px;
    margin: 0 auto;
}
.LoginHeader{
    text-align: center
}
.imgBox{
    display: inline-block;
    width: 140px;
    height: 56px;
}
.LoginHeader img{
    width: 140px;
    height: 56px;
}
.messageLogin-box{
    margin-top: 40px;
    display: flex;
    justify-content: center;
}
.messageLogin{
    color: #2395ff;
    font-weight: 700;
    border-bottom: 2px solid #2395ff;
    font-size: 14px;
    padding-bottom: 4px;
    cursor: pointer;
    display: block;
    width: 58px;
    margin: 0 20px;
}
.loginBox input{
    position: relative;
    margin-top: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
    width: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
}
.loginBox input:focus{
    outline:none;
    border: 1px solid #2395ff;
}
.agreement{
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
}
.agreement a{
    color: #2395ff;
}
.loginBtn{
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border: none;
    outline:none;
}
.about{
    display: block;
    margin-top: 20px;
    text-align: center;
    color: #999;
}
</style>
