import Vuex from 'vuex';
import movies from './modules/movies.js'

const createStore = () => {
    return new Vuex.Store({
        actions: {
            nuxtServerInit(vuexContext, context) {
                // context.store.dispatch('refreshAction', context.req.headers.cookie)
            },
            
        },
        modules: {
            movies
        },
    })
}

export default createStore;