<template>
    <div id="mine" class="page">
        <header class="header">
            <div class="arrow-left">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
            </div>
            <div class="my">我的</div>
        </header>
        <div>
            <div class="login-box" @click="loginAction()">
                <div class="portrait">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
                </div>
                <div class="personal-info">
                    <p class="personal-mtk">登录/注册</p>
                    <p>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shouji"></use>
                        </svg>
                        <span>登录后享受更多特权</span>
                    </p>
                </div>
                <span class="arrow-right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou-copy"></use>
                    </svg>
                </span>
            </div>
        </div>
        <div class="maininfo">
            <a href="javascript:;" class="maininfo-tab">
                <p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qian"></use>
                    </svg>
                </p>
                <p class="maininfo-title">钱包</p>
            </a>
            <a href="javascript:;" class="maininfo-tab">
                <p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qunfenghongbao"></use>
                    </svg>
                </p>
                <p class="maininfo-title">红包</p>
            </a>
            <a href="javascript:;" class="maininfo-tab">
                <p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-4"></use>
                    </svg>
                </p>
                <p class="maininfo-title">金币</p>
            </a>
        </div>
        <div class="profile-1reTe">
            <a href="javascript:;" class="index-2MEEn">
                <aside class="index-161Mm">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-ico_site"></use>
                    </svg>
                </aside>
                <div class="index-yydpu">
                    我的地址
                    <span class="index-3Z8It">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youjiantou-copy-copy"></use>
                        </svg>
                    </span>
                </div>
            </a>
        </div>
        <div class="profile-1reTe">
            <a href="javascript:;" class="index-2MEEn">
                <aside class="index-161Mm">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fenqishangcheng"></use>
                    </svg>
                </aside>
                <div class="index-yydpu">
                    金币商城
                    <span class="index-3Z8It">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youjiantou-copy-copy"></use>
                        </svg>
                    </span>
                </div>
            </a>
            <a href="javascript:;" class="index-2MEEn">
                <aside class="index-161Mm">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-msnui-gift-square"></use>
                    </svg>
                </aside>
                <div class="index-yydpu">
                    分享拿5元现金
                    <span class="index-3Z8It">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youjiantou-copy-copy"></use>
                        </svg>
                    </span>
                </div>
            </a>
        </div>
        <div class="profile-1reTe">
            <a href="javascript:;" class="index-2MEEn">
                <aside class="index-161Mm">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kefu"></use>
                    </svg>
                </aside>
                <div class="index-yydpu">
                    我的客服
                    <span class="index-3Z8It">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youjiantou-copy-copy"></use>
                        </svg>
                    </span>
                </div>
            </a>
            <a href="javascript:;" class="index-2MEEn">
                <aside class="index-161Mm">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-changyonglogo40"></use>
                    </svg>
                </aside>
                <div class="index-yydpu">
                    下载饿了么APP
                    <span class="index-3Z8It">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-youjiantou-copy-copy"></use>
                        </svg>
                    </span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        loginAction(){
            this.$router.push({path:"/login"})
        }
    }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 44px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.my {
  font-size: 18px;
  font-weight: 900;
  line-height: 44px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.arrow-left {
  float: left;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-left img {
  width: 12px;
}
.login-box {
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 25px 15px;
  color: #fff;
  align-items: center;
}
.portrait {
  width: 60px;
  height: 60px;
}
.portrait img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.personal-info {
  margin-left: 18px;
  flex-grow: 1;
}
.personal-mtk {
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 4px;
}
.maininfo{
    display: table;
    width: 100%;
    height: 83px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
}
.maininfo-tab{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
}
.maininfo-title{
    margin-top: 5px;
    color: #666;
    font-weight: 700;
}
.maininfo-tab:not(:last-child) {
    border-right: 1px solid #ddd;
}
.maininfo-tab svg{
    width: 26px;
    height: 26px;
}
.profile-1reTe{
    margin-top: 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    line-height: 46px;
    background: #fff;
}
.index-2MEEn {
    font-size: 16px;
    color: #333;
    display: flex;
    align-items: center;
    padding-left: 25px;
}
.index-161Mm {
    margin-left: -10px;
    margin-right: 10px;
}
.index-yydpu {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.index-3Z8It svg {
    width: 10px;
    height: 10px;
    margin-right: 10px;
}
.index-2MEEn:not(:last-child) .index-yydpu {
    border-bottom: 1px solid #eee;
}
</style>
