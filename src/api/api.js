import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '@/store/store.js'
import api from 'apiConfig'

Vue.use(VueResource)

function http(url,param,type){
    return new Promise((resolve,reject) => {
        Vue.http({
            url: url,
            params: param,
            method: type,
        },param).then((response) => {
            resolve(response.data)
        }).catch((response) => {
            console.log(response.statusText)
        })
    })
}

api.get = (url,param) => http(url,param,'get')

api.post = (url,param) => http(url,param,'post')

api.interceptors = function() {
    Vue.http.interceptors.push((request,next) => {
        store.dispatch('showLoading', true)
        next((response) => {
            setTimeout(() => {
                store.dispatch('showLoading', false)
                return response
            },1000)
        })
    })
}
export default api