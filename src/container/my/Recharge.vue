<template>
    <div class="wraper">
        <section class="bank_sec">
            <span class="bank_icon" :class="bankClassConfig[bankCode]"></span>
            <h4>招商银行 (0123)</h4>
            <p>单笔限额20,000元，单日限额500,000元</p>
        </section>
        <div class="form_group">
            <Inputs :label="'充值金额'">
                <input type="number" ref="money" placeholder="最低金额不低于2.00元" />
            </Inputs>

            <div class="agree_line">
                <input type="checkbox" id="agree" ref="agreeInput" checked="false"/>
                <label for="agree">我同意</label>
                <a >《人众金服充值协议》</a>
            </div>

            <Btn class="recharge_btn" label="充值" type="red" :click="submitRecharge" />
        </div>

        <VDialog :show="showBomb" :close="closeConfirmSms">
            <div class="bomb_cont">
                <p class="msg">已向手机号码<span v-text="hiddenPhone"></span>发送短信</p>
                <Inputs :type="'border'">
                    <input type="tel" ref="smsInput" placeholder="请输入短信验证码"/>
                    <span class="tail" @click="getSmsCode" v-text="smsText"></span>
                </Inputs>
                <Btn label="确定" type="red" :click="confirmSmsCode"/>
            </div>
        </VDialog>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import VDialog from '@/component/Dialog'
    import Inputs from '@/component/Inputs'

    export default {
        name: 'Rechage',
        data() {
            return {
                hasGetCode:false,//是否已经获取过验证码
                smsCount:0,//验证码倒计时
                showBomb:false,//显示弹框
                bankCode:'zs',
                phone:'18899991995',
                bankClassConfig:{
                    zs:'zs',//招商银行
                }
            }
        },
        computed: {
            hiddenPhone(){
                return this.phone.substr(0,3)+'****'+this.phone.substr(7,11);
            },
            smsText(){
                const count0Txt=this.hasGetCode?'重新获取':'获取验证码';
                return this.smsCount==0?count0Txt:`${this.smsCount}s`
            }
        },
        mounted() {

        },
        methods: {
            submitRecharge(){//提交金额  显示输入密码弹框
                const val=this.$refs.money.value;
                const valied=/^\d+(\.\d{1,2})?$/.test(val);
                const agree=this.$refs['agreeInput'].checked;//是否同意

                alert(agree);
                if(!valied){
                    alert('金额输入不正确');
                }else{
                    if(val<2){//小于2元
                        alert('充值金额不能低于2.00元');
                    }else{
                        this.showBomb=true;
                        alert('输入正确！'+val);
                    }
                }
            },
            confirmSmsCode(){//确认短信验证码
                const val=this.$refs['smsInput'].value;
                const reg=/\d{4}/;
                const valied=reg.test(val);
                if(valied){
                    alert('验证通过');
                }else{
                    alert('请输入正确的短信验证码！');
                }
            },
            closeConfirmSms(){//关闭短信验证码弹框
                this.showBomb=false;
            },
            changeTime(){//倒计时
                setTimeout(() => {
                    if(this.smsCount > 0){
                        this.smsCount -= 1
                        this.changeTime();
                    }
                },1000)
            },
            getSmsCode(){//调用获取短信码接口
                if(!this.smsCount){
                    this.smsCount=10;
                    this.hasGetCode=true;
                    this.changeTime();
                }
            }
        },

        components: {
            Btn,
            Inputs,
            VDialog
        }
    }
</script>
<style lang="scss" scoped>
    .wraper{
        .bank_sec{
            @include box((p:0.24rem 0 0.26rem 1.3rem,bg:$white,m:0.3rem 0));
            position: relative;
            h4{
                @include box((fs:0.3rem,c:$black2,lh:0.42rem));
                font-weight:normal;
            }
            p{
                @include box((m:0.2rem 0 0,fs:0.24rem,c:$black9,lh:0.33rem));
            }
            .bank_icon {
                @include box((w:0.68rem, h:0.68rem,m:-0.34rem 0 ));
                @include position((p:absolute,t:50%,l:0.3rem));
                @include thin(all,$red);
                &.zs{
                    @include bg_img('bank_icon_zs.png');
                }
            }
        }
    }


    .agree_line{
        @include box((p:0 0 0 0.3rem,h:0.9rem,lh:0.9rem,fs:0.2rem));
        input{
            @include bg_img('icon_agree_not.png');
            @include box((w:0.3rem,h:0.3rem));
            vertical-align: middle;
            -webkit-appearance: none;
        }
        input:checked{
            @include bg_img('icon_agree.png');
        }

        label{
            @include box((c:$black9));
        }
        a{
            @include box((c:$blue));
        }
    }

    .recharge_btn{
        @include box((m:0 0.3rem));
    }

    .bomb_cont{
        @include box((p:0.6rem 0.3rem 0.4rem));
        .msg{
            @include box((fs:0.28rem,c:$black9,ta:center,m:0.2rem 0 0.55rem));
            span{
                @include box((c:#252525,m:0 0.1rem));
            }
        }
        .tail{
            @include box((w:1.6rem,ta:center,c:$blue));
        }
    }
</style>