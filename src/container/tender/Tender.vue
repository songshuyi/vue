<template>
    <div>
        <div class="tender_nav">
            <p :class="{active:!sortBy}" @click="clickSortBy(0)"><label>默认</label></p>
            <p :class="{active:sortBy==='rate',down:sortDown}" @click="clickSortBy('rate')">利率<span></span></p>
            <p :class="{active:sortBy==='period',down:sortDown}" @click="clickSortBy('period')">期限<span></span></p>
        </div>

        <div class="wrap" ref="bs">
            <!--可以购买的标的-->
            <div ref="wrap" class="container" up="下拉刷新" down="上拉加载">
                <ul class="tender_ul">
                    <router-link :to="'/tender/detail/'+item.id" tag="li" :key="index" v-for="(item ,index) in sortedActiveLists" >
                        <p class="tender_title">
                            <span>众淘宝 — 1182</span>
                            <label>红包</label>
                            <label>加息券</label>
                        </p>
                        <div class="tender_cont">
                            <div class="left">
                                <p>
                                    <span v-text="item.rate">11.5</span>
                                    <i>% + 1.5%</i>
                                    <strong>奖励</strong>
                                </p>
                                <label class="desc">预期年化</label>
                            </div>
                            <div class="right">
                                <p><span>30</span>天</p>
                                <label class="desc">期限</label>
                            </div>
                        </div>
                        <div class="tender_footer">
                            <label>剩余金额 <span>9,200元</span></label>
                            <label class="progress_wraper">
                                <span><i class="barTransition" :style="{width:item._percent+'%'}"></i></span>{{item._percent+'%'}}
                            </label>
                        </div>
                    </router-link>
                </ul>
                <div class="middle_title">以下均为已售罄产品</div>
                <!--已经售罄的标的-->
                <ul class="tender_ul disabled_ul">
                    <li v-for="(item,index ) in sortedPassedLists" class="disabled">
                        <p class="tender_title">
                            <span>众淘宝 — 1182</span>
                            <label>红包</label>
                            <label>加息券</label>
                        </p>
                        <div class="tender_cont">
                            <div class="left">
                                <p>
                                    <span v-text="item.rate">11.5</span>
                                    <i>% + 1.5%</i>
                                    <strong>奖励</strong>
                                </p>
                                <label class="desc">预期年化</label>
                            </div>
                            <div class="right">
                                <p><span>30</span>天</p>
                                <label class="desc">期限</label>
                            </div>
                        </div>
                        <div class="tender_footer">
                            <label>剩余金额 <span>0元</span></label>
                            <label class="progress_wraper">
                                <span><i></i></span>100%
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Menu_nav></Menu_nav>
    </div>
</template>
<script>
    import Menu_nav from '@/component/Menu'
    import Project from '@/component/Project'
    import BScroll from 'better-scroll'
    export default {
        name: 'tender',
        data() {
            return {
                sortBy: 0,//0 rate period 根据什么排序
                sortDown: false,// true:up  false:down  排序方向
                activeLists: [
                    {
                        rate: 10,
                        id:1,
                        percent:90,
                    },
                    {
                        rate: 9,
                        id:2,
                        percent:40,
                    },
                    {
                        rate: 8,
                        id:3,
                        percent:60,
                    }
                ],
                passedLists: [
                    {
                        rate: 10
                    },
                    {
                        rate: 9
                    }
                ],
            }
        },
        computed: {
            sortedActiveLists(){//经过排序的可投资标的
                return this.activeLists.sort((prev, next) => {
                    return this.sortDown ? next.rate - prev.rate : prev.rate - next.rate;
                });
            },
            sortedPassedLists(){//经过排序的已售罄列表
                return this.passedLists.sort((prev, next) => {
                    return this.sortDown ? next.rate - prev.rate : prev.rate - next.rate;
                });
            }
        },
        methods: {
            clickSortBy(sortBy){
                if(sortBy){//按照 利率 期限排序
                    if(this.sortBy === sortBy){//如果重复点击  切换排序方向
                        this.sortDown = !this.sortDown;
                    }else{
                        this.sortBy = sortBy;
                    }
                }else{//按照默认排序
                    this.sortBy = sortBy;
                    this.sortDown=false;
                }
            },
            getInitialData(){//加载页面初始数据
                this.activeLists.forEach((item,index)=>{
                    this.animatePercent(item);
                })
            },
            animatePercent(item){//更新进度条状态
                if(!item._percent){
                    this.$set(item,'_percent',0);
                }
                const aimate = () => {
                    requestAnimationFrame(()=>{
                        if(item._percent<item.percent){
                            item._percent+=1;
                            aimate()
                        }else{
                            item._percent=item.percent;
                        }
                    })
                }
                aimate();
            }
        },
        components: {
            Menu_nav,
            Project
        },
        created() {
            this.getInitialData();
            let loadCount=0;

            this.$nextTick(() => {
                const bs = this.$refs.bs
                const scroll = new BScroll(bs, {
                    click: true,
                    preventDefault:true
                })
                const wrap = this.$refs.wrap
                let diff = bs.getBoundingClientRect().height - wrap.getBoundingClientRect().height
                scroll.on('scroll ',(e) => {
                    console.log(e);
                })
                scroll.on('touchend', (pos) => {
                    if (pos.y > 50) {
                        wrap.setAttribute('up', '刷新中')
                        setTimeout(function () {
                            scroll.scrollTo(0, 50)
                        }, 100)
                        setTimeout(function () {
                            wrap.setAttribute('up', '上拉刷新')
                            scroll.scrollTo(0, 0)
                        }, 2000)
                    }
                    if (diff - pos.y > 50) {
                        loadCount+=1;//模拟加载完毕
                        if(loadCount<3){
                            this.passedLists.push({
                                rate: 9 + (Math.random()).toFixed(2) * 1
                            })
                            this.$nextTick(() => {
                                scroll.refresh()
                                diff = bs.getBoundingClientRect().height - wrap.getBoundingClientRect().height
                            })
                        }else{
                            wrap.setAttribute('down', '已全部加载')
                        }
                    }
                })
            })
        },
    }
</script>
<style lang="scss" scoped>
    .tender_nav {
        @include box((bg:$white, w:100%, h:.9rem, d:flex));
        @include thin(bottom, #e5e5e5);
        p {
            flex: 1;
            @include box((lh:.9rem, ta:center, c:$black9));
            span {
                @include box((d:inline-block, h:100%));
                vertical-align: middle;
                @include position((p:relative));
                &:before {
                    margin: 0.3rem 0 0.05rem 0.1rem;
                    @include tringle((to:top, w:0.13rem, h:0.18rem, c:#e5e5e5));
                }
                &:after {
                    margin: 0.05rem 0 0 0.1rem;
                    @include tringle((to:bottom, w:0.13rem, h:0.18rem, c:#e5e5e5));
                }
            }
            &.active {
                @include box((c:$red));

                span {
                    &:before {
                        @include tringle((to:top, w:0.13rem, h:0.18rem, c:$red));
                    }
                }

                &.down {
                    span {
                        &:before {
                            @include tringle((to:top, w:0.13rem, h:0.18rem, c:#e5e5e5));
                        }
                        &:after {
                            @include tringle((to:bottom, w:0.13rem, h:0.18rem, c:$red));
                        }
                    }
                }
            }
        }
    }

    .wrap {
        overflow: hidden;
        width: 100%;
        @include position((p:absolute, t:0.9rem, b:1.16rem, z:10));
        .container {
            width: 7.5rem;
            position: relative;
            $beforeAfterH: 0.5rem;
            &:before {
                content: attr(up);
                @include position((p:absolute, l:0, t:- $beforeAfterH, z:10));
                @include box((w:100%, h:$beforeAfterH, ta:center, lh:$beforeAfterH))
            }
            &:after {
                content: attr(down);
                @include box((d:block, w:100%, h:$beforeAfterH, ta:center, lh:$beforeAfterH));
                position: absolute;
            }
        }
    }

    .tender_ul {
        @include box((p:0.2rem 0 0));
        &.disabled_ul {
            padding-top: 0;
        }
        li {
            @include box((m:0 0 0.2rem, p:0.24rem 0 0 0, bg:$white));
            &:last-child {
                margin-bottom: 0.01rem;
            }
            .tender_title {
                @include box((lh:0.4rem, h:0.4rem, p:0 0 0 0.3rem, fs:0));
                span {
                    @include box((c:$black5, m:0 0.16rem 0 0, fs:0.28rem, lh:0.4rem, d:inline-block));
                    vertical-align: middle;
                }
                label {
                    @include box((c:$blue, lh:0.32rem, p:0 0.14rem, fs:0.2rem, bdr:0.04rem, m:0 0.05rem));
                    @include thin(all, $blue);
                    vertical-align: middle;
                }
            }
            .tender_cont {
                @include box((d:flex, p:0.18rem 0 0.26rem));
                .desc {
                    @include box((c:$black9));
                }
                .left {
                    flex: 1;
                    @include box((ta:center));
                    p {
                        @include box((c:$red, lh:0.75rem));
                        span {
                            @include box((fs:0.54rem));
                        }
                        strong {
                            @include box((c:$gold, d:inline-block, fs:0.18rem, lh:0.24rem, w:0.52rem, h:0.24rem, ta:center));
                            @include bg_img('icon_tender_award.png');
                            font-weight: normal;
                        }
                    }
                }
                .right {
                    flex: 1;
                    @include box((ta:center));
                    p {
                        @include box((lh:0.75rem));
                        span {
                            @include box((fs:0.54rem, c:$black2));
                        }
                    }

                }
            }
            .tender_footer {
                @include box((h:0.9rem, lh:0.9rem, p:0 0.76rem 0 0.4rem));
                @include thin(top, #e5e5e5);
                label:nth-child(1) {
                    @include box((c:$black9, fs:0.26rem));
                    span {
                        @include box((c:#101010, m:0 0 0 0.1rem));
                    }
                }
                label:nth-child(2) {
                    @include box((fl:right, fs:0.18rem));
                    span {
                        @include box((w:1rem, h:0.04rem, bg:#e5e5e5, d:inline-block, m:0 0.2rem 0 0, c:$black2));
                        @include position((p:relative));
                        vertical-align: middle;
                        i {
                            @include box((d:block, h:100%, w:60%, bg:$red));
                            @include position((p:absolute, l:0, t:0));
                        }
                    }
                }
            }
        }
        li.disabled {
            $blackc: #ccc;
            .tender_title {
                span {
                    @include box((c:$blackc));
                }
                label {
                    @include box((c:$blackc));
                    @include thin(all, $blackc);
                }
            }
            .tender_cont {
                .desc {
                    @include box((c:$blackc));
                }
                .left {
                    p {
                        @include box((c:$blackc));
                        strong {
                            @include box((c:$blackc));
                        }
                    }
                }
                .right {
                    p {
                        @include box((c:$blackc));
                        span {
                            @include box((c:$blackc));
                        }
                    }

                }
            }
            .tender_footer {
                @include thin(top, $blackc);
                label:nth-child(1) {
                    @include box((c:$blackc));
                    span {
                        @include box((c:$blackc));
                    }
                }
                label:nth-child(2) {
                    @include box((c:$blackc));
                    span {
                        i {
                            @include box((bg:#e5e5e5, w:100%));
                        }
                    }
                }
            }
        }
    }

    .middle_title {
        @include box((fs:0.24rem, c:$black9, lh:0.8rem, ta:center));
        @include thin(all,transparent);
    }

</style>