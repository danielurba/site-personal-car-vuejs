import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: false
    },
    mutations: {
        toogleMenu(state, isVisible) {
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
                console.log('pass')
            } else {
                state.isMenuVisible = isVisible
                console.log('pass2')
            }
        }
    }
})