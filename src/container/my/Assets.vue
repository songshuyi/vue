<template>
    <div class="wraper">
        <section class="figure">
            <div class="title">
                <p class="left">总资产(元) <span class="question"></span></p>
                <p class="right">124,451.00</p>
            </div>
            <div class="content">
                <div class="circle_wraper" ref="canvas_wraper">
                    <canvas ref="canvas"></canvas>
                </div>
                <div class="right_msg">
                    <ul>
                        <li>
                            <span>可用余额</span>
                            <label >12,390.00</label>
                        </li>
                        <li>
                            <span>待收本息</span>
                            <label>22,390.00</label>
                        </li>
                        <li>
                            <span>提现处理中</span>
                            <label >22,390.00</label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div class="text_area">
            <div class="title">
                <p class="left">可用余额(元)</p>
                <p class="right">124,451.00</p>
            </div>
            <ul>
                <li>
                    <span>可提现金额</span>
                    <label >12,390.00</label>
                </li>
                <li>
                    <span>待入账金额</span>
                    <label >22,390.00</label>
                </li>
            </ul>
            <div class="title">
                <p class="left">待收本息(元)</p>
                <p class="right">124,451.00</p>
            </div>
            <ul>
                <li>
                    <span>众金宝</span>
                    <label >12,390.00</label>
                </li>
                <li>
                    <span>众惠宝</span>
                    <label >22,390.00</label>
                </li>
            </ul>
            <div class="title">
                <p class="left">提现处理中(元)</p>
                <p class="right">124,451.00</p>
            </div>
        </div>
    </div>
</template>
<script>


    export default {
        name: '',
        data() {
            return {
                circle:[
                    {num:10,color:'#4992ec'},//余额
                    {num:20,color:'#FF9B09'},//待收
                    {num:30,color:'#8CBE37'},//提现
                ],
                _sum:0,//三个圆圈的动效和
            }
        },
        mounted() {
            const canvas = this.$refs.canvas;
            const canvas_wraper=this.$refs['canvas_wraper'];
            let {width,height}=canvas_wraper.getBoundingClientRect();
            canvas.height=height;
            canvas.width=width;

            this.sum=this.circle[0].num+this.circle[1].num+this.circle[2].num;

            this.animateCircle(0).then(()=>{
                return this.animateCircle(1);
            }).then(()=>{
                return this.animateCircle(2);
            });
        },
        methods: {
            animateCircle(index){
                let {num}=this.circle[index];
                let _num=0;
                let perArc=Math.PI*2 / this.sum;
                let start=this.$data._sum*perArc;
                return new Promise((resolve,reject)=>{
                    let animate= ()=> {
                        requestAnimationFrame(()=>{
                            if(_num<num){
                                _num+=1;
                                this.$data._sum+=1;
                                let end=this.$data._sum*perArc;
                                let color=this.circle[index].color;
                                this.drawCircle({start,end,color});
                                animate();
                            }else{
                                resolve(true);
                            }
                        })
                    }
                    animate();
                });
            },
            drawCircle(options){
                const canvas = this.$refs.canvas;
                const {start=0,end=0,color='#4992ec'}=options;
                let {width,height}=canvas.getBoundingClientRect();
                const ctx = canvas.getContext("2d");
                ctx.beginPath();

                ctx.strokeStyle = color;
                let bodyFontSize=document.documentElement.style.fontSize.replace('px','')*1;
                let strokeWidth= Math.round(bodyFontSize*0.4);
                ctx.lineWidth = strokeWidth;

                const circle = {
                    x : width * 0.5,    //圆心的x轴坐标值
                    y : height *0.5,    //圆心的y轴坐标值
                    r : width * 0.5 - strokeWidth      //圆的半径
                };
                ctx.arc(circle.x, circle.y, circle.r, start,end, false);
                ctx.stroke();
            }
        },
        computed: {},
        components: {}
    }
</script>
<style lang="scss" scoped>
    .question{
        @include box((d:inline-block,w:0.34rem,h:0.34rem));
        @include bg_img('icon_question.png');
    }
    .figure{
        @include box((bg:$white,p:0 0 0 0.4rem));
        .title{
            @include box((d:flex,p:0.4rem 0.4rem 0.4rem 0,lh:0.45rem,fs:0.32rem,c:$black2));
            @include thin(bottom,#e5e5e5);
            .left,.right{
                flex:1;
            }
            .right{
                @include box((fs:0.36rem,c:$red,lh:0.5rem,ta:right));
            }
        }
        .content{
            @include box((p:0.4rem 0.4rem 0.4rem 0,d:flex));
            $green:#8CBE37;
            $orange:#FF9B09;
            .circle_wraper{
                @include box((w:2.67rem,h:2.67rem));
                canvas{
                    border:1px solid $green;
                }
            }
            .right_msg {
                flex: 1;
                @include box((p:0.4rem 0 0 0.4rem));
                li{
                    @include box((lh:0.4rem,fs:0.28rem,m:0.24rem 0));
                    &:before{
                        content:'';
                        @include box((w:0.18rem,h:0.18rem,d:inline-block,bdr:50%,m:0 0.2rem 0 0));
                    }
                    span{
                        @include box((c:$black5));
                    }
                    label{
                        @include box((fl:right,c:$black2));
                    }
                }
                li:nth-child(1){
                    &:before{
                        @include box((bg:$blue));
                    }
                }
                li:nth-child(2){
                    &:before{
                        @include box((bg:$orange));
                    }
                }
                li:nth-child(3){
                    &:before{
                        @include box((bg:$green));
                    }
                }
            }
        }
    }

    .text_area{
        @include box((p:0 0 0 0.4rem,bg:$white,m:0.2rem 0));
        .title{
            @include box((d:flex,p:0.4rem 0.4rem 0.4rem 0,lh:0.42rem,fs:0.3rem,c:$black2));

            .left,.right{
                flex:1;
            }
            .right{
                @include box((fs:0.32rem,c:$black2,lh:0.45rem,ta:right));
            }
        }
        ul{
            @include box((p:0.24rem 0.24rem 0.24rem 0));
            @include thin(bottom,#e5e5e5);
            li{
                &:not(:last-child){
                    @include box((m:0 0 0.24rem 0));
                }
                span{
                    @include box((c:$black5,fs:0.28rem));
                }
                label{
                    @include box((fl:right,fs:0.32rem,c:$black5));
                }
            }
        }
    }



</style>