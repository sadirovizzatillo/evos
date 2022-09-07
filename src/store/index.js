import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        element:""
    },
    getters: {},
    mutations: {
        setElement(state, payload){
            state.element = payload
        }
    },
    actions: {
        setElement({commit}, payload){
            console.log(payload)
            commit("setElement", payload)
            // if(payload.length < 1){
            //     // console.log(payload)
            //     // const singlePayload = [];
            //     // payload.forEach(item => {
            //     //     singlePayload.push(item)
            //     // })
            //     return
            //     // commit("setElement", payload[0])
            // }else{

            // }
        }
    }
})
