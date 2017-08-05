const mutations = {
    SET_INDEX(state,index){
        state.index = index
    },
    SHOW_LOADING(state,flag){
        state.show_loading = flag
    },
    SHOW_MSG(state,msg){
        if(typeof msg == 'object'){
            msg.show = true
            if(!msg.btn){
                msg.btn = false
                setTimeout(() => {
                    state.msg.show = false
                },state.msg.time)
            }
            state.msg = Object.assign({},state.msg,msg)
        }else{
            state.msg.show = false
        }
    }
}
export default mutations