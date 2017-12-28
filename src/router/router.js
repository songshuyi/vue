import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = resolve => require(['@/container/Index.vue'], resolve)

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
