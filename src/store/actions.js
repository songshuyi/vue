import api from '@/api/api.js'

const actions = {
    async setIndex({commit}){
        const data = await api.get(api.index)
        commit('SET_INDEX',data)
    },
    showLoading({commit},state){
        commit('SHOW_LOADING',state)
    },
    showMsg({commit},state){
        commit('SHOW_MSG',state)
    }
}
export default actions