<template>
    <div class="wraper">
        <transition name="scaleUp">
            <div v-show="showContent1" class="content1">
                <header>
                    <div class="title">
                        <label>11.5</label> + <span>1.52 <i>奖励</i></span> %
                    </div>
                    <p class="nh_txt">预期年化</p>
                    <ul class="msg_ul">
                        <li>
                            <p>项目总额(元)</p>
                            <p>8,331,000</p>
                        </li>
                        <li>
                            <p>投资期限(天)</p>
                            <p>60</p>
                        </li>
                    </ul>
                    <p class="progress" :style="{width:rateText}">
                        <span v-text="rateText"></span>
                    </p>
                </header>
                <ul class="labels">
                    <li><span class="qitou"></span>100起投</li>
                    <li><span class="jiaxi"></span>满标起息</li>
                    <li><span class="cunguan"></span>银行存管</li>
                </ul>
                <div class="base_msg">
                    <label class="title">基本信息</label>
                    <ul>
                        <li><span>剩余募集时间</span><i v-text="timeLeftTxt">71小时23分23秒</i></li>
                        <li><span>还款方式</span><i>月还息到期还本</i></li>
                        <li><span>还款提示</span><i>到期本金及收益归至账户余额</i></li>
                    </ul>

                </div>
            </div>
        </transition>

        <p class="more" v-show="showContent1" @click="toggleContent">
            上滑查看更多项目信息
        </p>

        <transition name="scaleUp1">
            <div v-show="!showContent1" class="content2">
                <TabNav :navs="navs" :click="selectItem" :index="navIndex" class="navs" :gap="'0.3rem'"/>
                <div class="tab_content">
                    <transition-group name="fade1">
                        <div class="baozheng" key="baozheng" v-show="navIndex==0">
                            <h4>多重风控保障，资金更安全</h4>
                            <ul>
                                <li>
                                    <p>第一还款来源</p>
                                    <label>融资方到期还款</label>
                                </li>
                                <li>
                                    <p>第二还款来源</p>
                                    <label>核心企业/担保公司/担保人提供无限连带担保责任</label>
                                </li>
                                <li>
                                    <p>第三还款来源</p>
                                    <label>风险保证金承诺垫付</label>
                                </li>
                            </ul>
                        </div>
                        <div class="detail" key="detail" v-show="navIndex==1">
                            <ul>
                                <li>
                                    <h3><span class="icon icon_cpms"></span>产品描述</h3>
                                    <p>众金宝系列产品是人众金服面向有色金属、钢材、化工等行业设计的一款专注于供应链金融领域的“低风险、高收益、灵活性高”的理财产品。</p>
                                </li>
                                <li>
                                    <h4>产品基础</h4>
                                    <p>
                                        主要围绕有色金属、钢材等大宗商品交易市场的核心企业，通过渗透到以核心企业为中心的产、购、销各个环节，实现了“物流”、“商流”、“资金流”、“信息流”等多流合一，为其上下游企业提供集订单、备货、验货、赊销、预付款、存货于一体的多维度综合性“1+N”供应链金融服务。</p>
                                </li>
                                <li>
                                    <h4>产品运作方式</h4>
                                    <p>
                                        以核心企业为中心的上下游企业依据真实贸易产生的资金需求委托浙江人众金融服务股份有限公司提供融资居间服务，人众金服平台将其借款信息推荐给合格投资者（平台会员），投资人自主自愿参与资金出借，投资到期后借款企业按照约定的年化收益率和还款方式向投资者进行本息还款。</p>
                                </li>
                                <li>
                                    <h4>产品业务模式</h4>
                                    <div class="business_mode">

                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h3><span class="icon icon_hxqy"></span>核心企业</h3>
                                </li>
                                <li>
                                    <h4>企业简介</h4>
                                    <p>
                                        汇金大通成立于2009年，是专注于为有色金属产业提供一站式采购解决方案服务的电商平台，为产业链提升带来巨大变革。 系浙江省“十二五”电子商务十强第三方平台，浙江省信息经济发展百家重点企业等。
                                        <br/>汇金大通遵循公开、公平、公正的诚信原则，利用电子商务交易平台解决企业原材料采购、半成品销售的困难， 同时降低企业采购及销售的成本，避免不规范交易行为给企业造成损失。作为解决再生有色金属的资源集中规范交易和物流解决方案的探索者， 汇金大通提供网上现货交易、远期电子合同交易、信息服务及物流等相关服务。
                                        <br/>汇金大通以宁波北仑港为依托，面向全球供应商、国内采购商招商，采用市场化运作手段规范交易， 并经有关部门认定为高科技电子商务和政府鼓励的信息化项目，同时拥有强大的客户资源、信息资源、 货物资源为各企业提供优质的服务。
                                    </p>
                                </li>
                                <li>
                                    <h4>获得荣誉</h4>
                                    <div class="honor">
                                        <p>2011年3月 中国再生资源产业技术创新战略联盟理事单位</p>
                                        <p>2014年4月 2013年度宁波市服务业十佳“创新之星”企业</p>
                                        <p>2014年8月 浙江省工商企业信用A级守合同重信用单位</p>
                                        <p>2015年1月 鄞州区2014年度经济工作先进企业都市产业进步奖</p>
                                        <p>2015年3月 中华人民共和国国家版权局计算机软件著作权登记证书</p>
                                        <p>2015年7月 通过ISO9001：2008 GB/T19001-2008质量管理体系认证</p>
                                    </div>
                                </li>
                            </ul>
                            <ul class="risk_control">
                                <li>

                                    <h3><span class="icon icon_fxbz"></span>风控保障</h3>
                                </li>
                                <li class="has_icon zjl">
                                    <h4>资金流控制</h4>
                                    <p>
                                        密切关注借款企业资金流的三个核心环节，即：资金流入、资金流出和存量。从资金流控制的角度看，销售过程中所形成的债权、采购过程中所形成的债务、库存的资金占用、存量资金的调配和使用、存量资金的控制、中短期资金的筹措等都是借款企业资金控制的重点内容。</p>
                                </li>
                                <li class="has_icon hwl">
                                    <h4>货物流控制</h4>
                                    <p>依托核心企业对其上下游企业在途和仓库货物委托第三方专业物流监管公司进行动态监管，货物出入库实时登记，存货质押设置风险预警线，物流全程跟踪。</p>
                                </li>
                                <li class="has_icon db">
                                    <h4>第三方担保</h4>
                                    <p>担保方： 1.核心企业 2.融资性担保公司</p>
                                </li>
                                <li class="has_icon fxzbj">
                                    <h4>风险准备金</h4>
                                    <p>风险准备金，是指平台建立一个资金账户，每完成一个借贷标，提取一定比例资金放入此账户，当借款人发生逾期现象时，平台就会启动风险准备金先行赔付投资人。
                                        <br/>风险准备金将实行只进不出、专款专用、银行存管等一系列透明、规范的监督管理制度，并专门用于补偿人众金服平台所服务的投资人由于借款人的违约所遭受的本金或本息的损失。
                                        <br/>人众金服根据平台投资金额提取一定比例的自有资金存入北京银行风险准备金，当前风险准备金银行账户存款已突破上千万元。</p>
                                </li>
                            </ul>
                            <ul class="borrow_info">
                                <li>
                                    <h3><span class="icon icon_jkzl"></span>借款资料</h3>
                                </li>
                                <div class="info_items">
                                    <label>企业营业执照</label>
                                    <label>组织机构信用代码证</label>
                                    <label>银行开户许可证</label>
                                    <label>法人代表身份证</label>
                                    <label>企业综合评估书</label>
                                    <label>委托融资居间协议</label>
                                    <label>借款合同</label>
                                    <label>担保合同</label>
                                </div>
                            </ul>
                        </div>
                        <div class="investor_record" key="investor_record" v-show="navIndex==2">
                            <ul>
                                <p class="title"><span>投资人/时间</span><label>金额(元)</label></p>
                                <li v-for="(n,index) in 10">
                                    <p><span>张女士{{index}}</span><label>{{n}},000</label></p>
                                    <p>2017/07/17  13:24:34</p>
                                </li>
                            </ul>
                        </div>
                    </transition-group>

                </div>
            </div>
        </transition>

        <!--底部购标按钮-->
        <div class="bottom_buy_area">
            <p>剩余可投 <span>10,962元</span></p>
            <Btn class="btn_wraper" :label="'立即抢购'" :href="'/tender/buy/'+id" :type="'red'"></Btn>
            <span class="icon" @click="clickCalculator"></span>
        </div>

        <!--计算器-->
        <VDialog :show="showCalculator" :close="()=>{this.showCalculator=false}">
            <div class="bomb_cont">
               计算器
            </div>
        </VDialog>
    </div>
</template>
<script>
    import Btn from '@/component/Btn'
    import TabNav from '@/component/TabNav'
    import VDialog from '@/component/Dialog'

    export default {
        name: 'TenderDetail',
        data() {
            return {
                id: this.$route.params.id,//tender id
                rateAll: 0,//购买比例
                rate: 0,//可变动的购买比例
                timeEnd: '2017-7-20',
                timeLeft: 329684,
                showContent1: true,
                navs: ['还款保障', '标的详情', '已投资人数'],
                navIndex: 0,
                showCalculator: false,//显示计算器
            }
        },
        created(){
            setTimeout(() => {
                this.rateAll = 60.25;
            }, 1000);
        },
        mounted() {
            let moveY;
            let isStartOnTop = false;//是否点击的时候就是顶部
            document.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                isStartOnTop = !window.scrollY;
                moveY = touch.clientY;
            });

            document.addEventListener('touchmove', (e) => {//手指滑动
                const touch = e.touches[0];
                let curMoveY = touch.clientY;
                const scrollY = window.scrollY;
                if (curMoveY - moveY > 0) {//向下滑动  显示content1
                    if (!this.showContent1 && !scrollY && isStartOnTop) {
                        this.showContent1 = true;
                    }
                } else if (curMoveY - moveY < 0) {//向上滑动 显示content2
                    if (this.showContent1 && !scrollY) {
                        this.showContent1 = false;
                        this.navIndex = 0;
                    }
                }
            });
        },
        watch: {//监听标的购买进度条的数值变化
            rateAll(n, o){
                const aimate = () => {
                    requestAnimationFrame(() => {
                        if (this.rate < this.rateAll) {
                            this.rate += 1;
                            aimate()
                        } else {
                            this.rate = this.rateAll;
                        }
                    })
                }
                aimate();
            }
        },
        methods: {
            selectItem(i){//选中一个tabnav时触发
                this.navIndex = i;
                document.body.scrollTop = 0;
            },
            toggleContent(){//设置显示的content内容
                this.showContent1 = !this.showContent1;
            },
            clickCalculator(){//显示计算器
                this.showCalculator=true;
            }
        },
        computed: {
            rateText(){//标的已经购买比例
                return `${this.rate}%`;
                return {
                    width: `${this.rate}%`,

                };
            },
            timeLeftTxt(){//标的倒计时文本
                let sec = this.timeLeft;
                let _formatStr = "";
                if (sec <= 0) {
                    _formatStr = '0天0小时0分0秒';
                } else {
                    let _day = Math.floor(sec / (24 * 3600)) || 0;
                    let _hour = Math.floor((sec % (24 * 3600)) / 3600) || 0;
                    let _min = Math.floor((sec % 3600) / 60) || 0;
                    let _sec = Math.floor(sec % 60) || 0;
                    _formatStr = `${_day}天${_hour}小时${_min}分${_sec}秒`;
                    setTimeout(() => {
                        this.timeLeft = sec - 1;
                    }, 1000);
                }

                return _formatStr;
            }
        },
        components: {
            Btn,
            TabNav,
            VDialog
        }
    }
</script>
<style lang="scss" scoped>
    .wraper {
        @include box((p:0 0 2.05rem));
    }

    .i {
        $yellow: #FFEAB7;
        @include box((d:block, m:0 0 0 -0.35rem, ta:center, fs:0.18rem, w:0.7rem, lh:0.26rem, h:0.26rem, bdr:0.26rem, c:$red, bg:$yellow));

        &:after {
            @include tringle((to:bottom, c:$yellow, w:0.08rem, h:0.06rem));
            @include box((m:0 0 0 -0.04rem));
            @include position((p:absolute, b:-0.03rem, l:50%));
        }
    }

    header {
        @include box((w:7.5rem, h:3.85rem, p:0.5rem 0 0));
        @include position((p:relative));
        background-color: #FE6045;
        background-image: url("#{$base_url}/tender_wave.png");
        background-size: 100% 2.17rem;
        background-repeat: no-repeat;
        background-position: bottom;

        .title {
            @include box((c:$white, ta:center));
            label {
                @include box((fs:0.58rem));
            }
            span {
                @include box((fs:0.36rem));
                @include position((p:relative));
                i {
                    @extend .i;
                    @include position((p:absolute, l:50%, t:-0.3rem));
                }
            }
        }
        .nh_txt {
            @include box((ta:center, lh:0.33rem, c:$white, fs:0.24rem));
        }
        .msg_ul {
            @include box((d:flex, m:0.84rem 0 0, c:$white, ta:center));
            li {
                flex: 1;
                p:first-child {
                    @include box((fs:0.24rem, lh:0.34rem));
                }
                p:last-child {
                    @include box((fs:0.36rem, lh:0.43rem, m:0.1rem 0 0));
                }
            }
        }
        .progress {
            @include position((p:absolute, b:0, l:0));
            @include box((h:0.04rem, bg:-webkit-gradient(linear, 0 0, right 0, from(#FFBDAD), to(#FFF0DA))));
            span {
                @extend .i;
                @include position((p:absolute, l:100%, t:-0.4rem));
            }
        }
    }

    .labels {
        @include box((h:1.85rem, bg:$white, p:0.34rem 0 0, ta:center, d:flex));
        li {
            @include box((fs:0.28rem, lh:0.4rem, c:$black5));
            flex: 1;
            span {
                @include box((d:block, w:0.68rem, h:0.68rem, m:0 auto 0.1rem));
            }
            .qitou {
                @include bg_img('tender_100.png')
            }
            .jiaxi {
                @include bg_img('tender_jiaxi.png')
            }
            .cunguan {
                @include bg_img('tender_cunguan.png')
            }
        }
    }

    .base_msg {
        @include box((bg:$white, p:0 0 0 0.3rem, m:0.2rem 0 0));
        .title {
            @include box((lh:1rem, c:$black5, d:block));
            @include thin(bottom, #e5e5e5);
        }
        ul {
            @include box((p:0.15rem 0));
        }
        li {
            @include box((lh:0.66rem, p:0 0.3rem 0 0));
            span {
                @include box((c:$black9));
            }
            i {
                @include box((c:$black5, fl:right));
            }
        }
    }

    .more {
        @include box((lh:0.84rem, ta:center, c:$black9, fs:0.26rem));
        &:before {
            content: '';
            @include box((d:inline-block, w:0.32rem, h:0.32rem));
            @include bg_img('icon_arrow_up_double.png');
            vertical-align: middle;
        }
    }

    .navs {
        @include position((p:fixed, t:0, z:1));
    }

    .content2 {
        position: absolute;
        left: 0;
        top: 0;
        @include box((p:1.08rem 0 0));
    }

    .tab_content {
        @include box((p:0 0 2.1rem 0));
        .baozheng {
            @include box((p:0.85rem 0 0.3rem, m:0 0 0.3rem, bg:$white));
            h4 {
                @include box((ta:center, fs:0.3rem, c:$black2, lh:0.42rem));
                font-weight: normal;
            }
            ul {
                @include box((p:0.66rem 1.1rem 0 1.4rem));
                li {
                    @include box((m:0 0 1.1rem 0, p:0 0 0 1.2rem));
                    @include position((p:relative));
                    p {
                        @include box((c:$black9, fs:0.28rem, lh:0.4rem));
                    }
                    label {
                        @include box((c:$black5, fs:0.3rem, lh:0.42rem));
                    }
                    &:before {
                        content: '';
                        @include position((p:absolute, l:0));
                        @include box((d:inline-block, w:0.87rem, h:0.87rem));

                    }
                    &:nth-child(1) {
                        &:before {
                            @include bg_img('icon_bz_1.png')
                        }
                    }
                    &:nth-child(2) {
                        &:before {
                            @include bg_img('icon_bz_2.png')
                        }
                    }
                    &:nth-child(3) {
                        &:before {
                            @include bg_img('icon_bz_3.png')
                        }
                    }
                }
            }
        }
        .detail {
            @include box((p:0 0.3rem 0, bg:$white));
            > ul {
                @include box((p:0.3rem 0 0.6rem));
                &:not(:last-child) {
                    @include thin(bottom, #e5e5e5);
                }
            }
            h3 {
                @include box((lh:0.4rem, fs:0.28rem, c:$black2, m:0 0 0.15rem));
                font-weight: normal;

                .icon {
                    @include box((d:inline-block, w:0.48rem, h:0.48rem, m:0 0.2rem 0 0));
                    vertical-align: middle;
                }
                .icon_cpms {
                    @include bg_img('tender_detail/icon_cpms.png');
                }
                .icon_hxqy {
                    @include bg_img('tender_detail/icon_hxqy.png');
                }
                .icon_fxbz {
                    @include bg_img('tender_detail/icon_fxbz.png');
                }
                .icon_jkzl {
                    @include bg_img('tender_detail/icon_jkzl.png');
                }
            }
            h4 {
                @include box((lh:0.34rem, fs:0.24rem, c:$black5, m:0.3rem 0 0.18rem));
                font-weight: normal;
            }
            p {
                @include box((c:$black9, fs:0.24rem, lh:0.36rem));
            }
            .honor {
                p {
                    @include box((lh:0.28rem, fs:$black9, m:0 0 0.45rem, p:0 0 0 1rem));
                    @include position((p:relative))
                    &:before {
                        content: '';
                        @include box((d:block, w:0.11rem, h:0.11rem, bg:#D8D8D8, bdr:50%));
                        @include position((p:absolute, t:0.1rem, l:0.445rem))
                    }
                }
            }
            .risk_control {
                li {
                    @include position((p:relative, z:0));
                    &.has_icon {
                        min-height: 1.02rem;
                        @include box((m:0 0 0.74rem));
                        @include box((p:0 0 0 1.94rem));
                        background-size: 1.02rem 1.02rem;
                        background-position: 0.15rem top;
                        background-repeat: no-repeat;
                        &.zjl {
                            background-image: url("#{$base_url}tender_detail/icon_zjl.png");
                        }
                        &.hwl {
                            background-image: url("#{$base_url}tender_detail/icon_hwl.png");
                        }
                        &.db {
                            background-image: url("#{$base_url}tender_detail/icon_db.png");
                        }
                        &.fxzbj {
                            margin-bottom: 0;
                            background-image: url("#{$base_url}tender_detail/icon_fxzbj.png");
                        }
                    }

                }
            }
            .borrow_info {
                .info_items {
                    label {
                        @include box((d:block, p:0 0 0 1.94rem, m:0.3rem 0, lh:0.46rem, fs:0.24rem, c:$black5));
                        background-image: url("#{$base_url}tender_detail/icon_ycy.png");
                        background-repeat: no-repeat;
                        background-size: 0.44rem 0.44rem;
                        background-position: 0.48rem center;
                    }
                }
            }
        }
        .investor_record {
            @include box((p:0 0 0.3rem, w:7.5rem));
            ul {
                @include box((p:0 0.3rem, bg:$white));
                .title {
                    @include box((lh:0.42rem, fs:0.3rem, c:$black2, p:0.3rem 0));
                    label {
                        float: right;
                    }
                }
                li {
                    @include box((p:0.24rem 0));
                    &:not(:last-child) {
                        @include thin(bottom, #e5e5e5);
                    }
                    p:first-child {
                        @include box((fs:0.28rem, c:$black5, lh:0.4rem));
                        label {
                            float: right;
                        }
                    }
                    p:nth-child(2) {
                        @include box((fs:0.24rem, c:$black9, lh:0.34rem));
                    }
                }
            }
        }
    }

    .scaleUp-enter-active, .scaleUp-leave-active {
        transition: all ease 400ms;
    }

    .scaleUp-enter, .scaleUp-leave-to {
        transform: translateY(-100%);
    }

    .scaleUp1-enter-active, .scaleUp1-leave-active {
        transition: all ease 400ms;
    }

    .scaleUp1-enter, .scaleUp1-leave-to {
        transform: translateY(100%);
    }

    .bottom_buy_area {
        @include box((h:2rem, w:100%, bg:$white, p:0 0 0 0.94rem));
        @include thin(top, #e5e5e5);
        @include position((p:fixed, l:0, b:0, z:5));
        p {
            @include box((lh:0.86rem, ta:center, c:$black9, fs:0.28rem));
            span {
                @include box((c:$red));
            }
        }
        .btn_wraper {
            @include box((p:0 0.3rem));
        }
        .icon {
            @include box((d:block, w:0.68rem, h:0.68rem));
            @include position((p:absolute, l:0.27rem, t:0.92rem));
            @include bg_img('icon_calculator.png')
        }
    }
</style>