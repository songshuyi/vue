import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = resolve => require(['@/container/Index.vue'], resolve)

//登录注册等
const Login = resolve => require(['@/container/Login.vue'], resolve)
const Register = resolve => require(['@/container/Register.vue'], resolve)
const ResetPwd = resolve => require(['@/container/ResetPwd.vue'], resolve)

//个人中心
const MyIndex = resolve => require(['@/container/my/MyIndex.vue'], resolve)
const My = resolve => require(['@/container/my/My.vue'], resolve)
const TenderLists = resolve => require(['@/container/my/TenderLists.vue'], resolve)
const MyTenderDetail = resolve => require(['@/container/my/TenderDetail.vue'], resolve)
const RedPacket = resolve => require(['@/container/my/RedPacket.vue'], resolve)
const RedPacketHistory = resolve => require(['@/container/my/RedPacketHistory.vue'], resolve)
const Calendar = resolve => require(['@/container/my/Calendar.vue'], resolve)
const Account = resolve => require(['@/container/my/Account.vue'], resolve)
const Recharge = resolve => require(['@/container/my/Recharge.vue'], resolve)
const RechargeSuccess = resolve => require(['@/container/my/RechargeSuccess.vue'], resolve)
const WithDrawCash = resolve => require(['@/container/my/WithDrawCash.vue'], resolve)
const TransferLists = resolve => require(['@/container/my/TransferLists.vue'], resolve)
const Transfer = resolve => require(['@/container/my/Transfer.vue'], resolve)
const Set = resolve => require(['@/container/my/Set.vue'], resolve)
const SetPwd = resolve => require(['@/container/my/SetPwd.vue'], resolve)
const Bill = resolve => require(['@/container/my/Bill.vue'], resolve)
const BillDetail = resolve => require(['@/container/my/BillDetail.vue'], resolve)
const Assets = resolve => require(['@/container/my/Assets.vue'], resolve)


//账户信息
const Info = resolve => require(['@/container/my/info/Info.vue'], resolve)
const PhoneUpdate = resolve => require(['@/container/my/info/PhoneUpdate.vue'], resolve)
const NameUpdate = resolve => require(['@/container/my/info/NameUpdate.vue'], resolve)
const BankCard = resolve => require(['@/container/my/info/BankCard.vue'], resolve)
const BankOpen = resolve => require(['@/container/my/info/BankOpen.vue'], resolve)

//投资
const TenderIndex = resolve => require(['@/container/tender/TenderIndex.vue'], resolve)
const Tender = resolve => require(['@/container/tender/Tender.vue'], resolve)
const TenderDetail = resolve => require(['@/container/tender/TenderDetail.vue'], resolve)
const Buy = resolve => require(['@/container/tender/Buy.vue'], resolve)
const BuySuccess = resolve => require(['@/container/tender/BuySuccess.vue'], resolve)

Vue.use(VueRouter)

const guardRoute = (to,from,next) => {
    const token = sessionStorage.getItem('user')
    if(token){
        next()
    }else{
        next('/login')
    }
}

const router = new VueRouter({
        mode:'history',
        routes: [
            {
                path: '/',
                component: Index,
                redirect: '/index'
            },
            {
                path: '/login',
                component: Login,
                meta: {
                    title: '登录'
                }
            },
            {
                path: '/index',
                component: Index,
                meta: {
                    title: '人众金服'
                }
            },
            {
                path: '/tender',
                component: TenderIndex,
                redirect:'/tender/index',
                children:[
                    {
                        path:'index',
                        component: Tender,
                        meta: {
                            title: '理财'
                        }
                    },
                    {
                        path: 'detail/:id',
                        component: TenderDetail,
                        meta: {
                            title: '理财'
                        }
                    },
                    {
                        path: 'buy/:id',
                        component: Buy,
                        meta: {
                            title: '投资'
                        }
                    },
                    {
                        path: 'buySuccess',
                        component: BuySuccess,
                        meta: {
                            title: '投资'
                        }
                    }
                ],
            },
            {
                path: '/my',
                component: MyIndex,
                children: [
                    {
                        path: 'index',  //个人中心首页
                        component: My,
                        meta: {
                            title: '我的'
                        }
                    },
                    {
                        path: 'tenderLists',//投资列表
                        component: TenderLists,
                        meta: {
                            title: '我的'
                        }
                    },
                    {
                        path: 'myTenderDetail/:id',//投资列表的标的详情
                        component: MyTenderDetail,
                        meta: {
                            title: '我的'
                        }
                    },
                    {
                        path: 'redPacket',//红包加息券列表
                        component: RedPacket,
                        meta: {
                            title: '我的'
                        }
                    },
                    {
                        path: 'redPacketHistory/:type',//红包 加息券历史列表
                        component: RedPacketHistory,
                        meta: {
                            title: '我的'
                        }
                    },
                    {
                        path: 'calendar',
                        component: Calendar,
                        meta: {
                            title: '还款日历'
                        }
                    },
                    {
                        path: 'account',
                        component: Account,
                        meta: {
                            title: '账户余额'
                        }
                    },
                    {
                        path: 'recharge',
                        component: Recharge,
                        meta: {
                            title: '充值'
                        }
                    },
                    {
                        path: 'rechargeSuccess',
                        component: RechargeSuccess,
                        meta: {
                            title: '充值'
                        }
                    },
                    {
                        path: 'withDrawCash',
                        component: WithDrawCash,
                        meta: {
                            title: '提现'
                        }
                    },
                    {
                        path: 'transferLists',
                        component: TransferLists,
                        meta: {
                            title: '我的转让'
                        }
                    },
                    {
                        path: 'transfer',
                        component: Transfer,
                        meta: {
                            title: '我的转让'
                        }
                    },
                    {
                        path: 'set',
                        component: Set,
                        meta: {
                            title: '设置'
                        }
                    },
                    {
                        path: 'setPwd/:type',
                        component: SetPwd,
                        meta: {
                            title: '设置密码'
                        }
                    },
                    {
                        path: 'bill',
                        component: Bill,
                        meta: {
                            title: '我的账单'
                        }
                    },
                    {
                        path: 'billDetail',
                        component: BillDetail,
                        meta: {
                            title: '账单明细'
                        }
                    },
                    {
                        path: 'info',
                        component: Info,
                        meta: {
                            title: '账户信息'
                        }
                    },
                    {
                        path: 'phoneUpdate',
                        component: PhoneUpdate,
                        meta: {
                            title: '更换手机'
                        }
                    },
                    {
                        path: 'nameUpdate',
                        component: NameUpdate,
                        meta: {
                            title: '修改昵称'
                        }
                    },
                    {
                        path: 'bankCard',
                        component: BankCard,
                        meta: {
                            title: '我的银行卡'
                        }
                    },
                    {
                        path: 'bankOpen',
                        component: BankOpen,
                        meta: {
                            title: '开通北京银行存管账户'
                        }
                    },
                    {
                        path: 'assets',
                        component: Assets,
                        meta: {
                            title: '资产明细'
                        }
                    }
                ]
            },
            {
                path: '/register',
                component: Register,
                meta: {
                    title: '注册'
                }
            },
            {
                path: '/resetPwd/:type',
                component: ResetPwd,
                meta: {
                    title: '找回登录密码'
                }
            },
            {
                path:'*',
                component:Index,
                redirect: '/index'
            }
        ]
    })

    router.beforeEach((to, from, next) => {
        // setTitle(to.meta.title)
        document.title = to.meta.title
        next()
    })

    function setTitle(title) {
        document.title = title
        let mobile = navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(mobile)) {
            let iframe = document.createElement('iframe')
            iframe.style.display = 'none'
            iframe.setAttribute('src', '/static/favicon.ico')
            let iframeCallback = function () {
                setTimeout(function () {
                    iframe.removeEventListener('load', iframeCallback)
                    document.body.removeChild(iframe)
                }, 0)
            }
            iframe.addEventListener('load', iframeCallback)
            document.body.appendChild(iframe)
        }
    }
export default router
