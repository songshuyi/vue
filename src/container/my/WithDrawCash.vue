<template>
    <div class="wraper">
        <ul class="form_group">
            <Inputs class="first" :labelWidth="'2.6rem'"  :label="'可提现金额(元)'" >
                <p v-text="canCashOut"></p>
            </Inputs>
            <Inputs   :label="'提现至'" >
                <p v-text="cashToBank"></p>
            </Inputs>
            <p class="normal_msg_line" v-text="errorMsg"></p>
            <Inputs   :label="'提现金额'" >
                <input type="number" v-model="money" placeholder="请输入提现金额">
            </Inputs>

            <p class="rules">提现规则</p>
            <p class="confirm_btn" >
                <Btn :label="btnText" type="red" :click="submitWithDrawCash" />
            </p>
            <p class="bottom_sxf">
                当月手续费限免还有3次/手续费：2.00元
            </p>
        </ul>

        <!--/resetPwd/2  1:登录密码  2：支付密码-->
        <VDialog :show="showBomb" :close="closeConfirmPass">
            <div class="bomb_cont">
                <Inputs :type="'border'">
                    <input type="number" v-model="payPssval" placeholder="请输入支付密码"/>
                    <router-link to="/resetPwd/2">忘记密码？</router-link>
                </Inputs>
                <Btn label="确认" type="red" :click="confirmPass"/>
            </div>
        </VDialog>

    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import VDialog from '@/component/Dialog'
    import Inputs from '@/component/Inputs'

    export default {
        name: 'WithDrawCash',
        data() {
            return {
                showBomb:false,//是否显示弹框
                canCashOut:'12,300.00',//可提现金额
                cashToBank:'交通银行 (0123)',//提现银行卡
                errorMsg:'今日充值金额23422元未入账，不可提现',
                before16:true,//下午16点之前
                money:'',//提现金额
                payPssval:'',//提现密码

            }
        },
        computed: {
            btnText(){
                return this.before16?'当日到账（最晚24:00），确认提交':'下一工作日到账，确认提交'
            }
        },
        mounted() {

        },
        methods: {
            submitWithDrawCash(){//提现弹框
                const val=this.money;
                const valied=/^\d+(\.\d{1,2})?$/.test(val);

                alert(valied);
                if(!valied){
                    alert('金额输入不正确');
                }else{
                    this.showBomb=true;
                    alert('输入正确！');
                }
            },
            confirmPass(){
                const val=this.payPssval;
                const reg=/^[a-zA-Z0-9_]{6,12}$/;
                alert(reg.test(val));
                alert(val);
            },
            closeConfirmPass(){
                this.showBomb=false;
            }
        },

        components: {
            Btn,
            VDialog,
            Inputs
        }
    }
</script>
<style lang="scss" scoped>

    .wraper{
    }
    .form_group{
        .first{
            @include box((m:0 0 0.3rem 0));
        }
        .normal_msg_line{
            @include box((lh:0.8rem,h:0.8rem,c:$black9,fs:0.24rem,p:0 0 0 0.3rem));
        }
        .rules{
            @include box((lh:0.74rem,c:$blue,p:0 0 0 0.3rem,fs:0.24rem));
        }
        .bottom_sxf{
            @include box((lh:0.28rem,ta:center,fs:0.2rem,c:$black9,m:0.17rem 0));
        }
    }
    .confirm_btn{
        @include box((p:0.06rem 0.3rem 0));
    }

    .bomb_cont{
        @include box((p:0.85rem 0.3rem 0.4rem));
    }
</style>