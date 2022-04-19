// import axios from 'axios'
import request from '@/services/request'
const state = {
    movies:[],
    searchedMovies:[], 
    singleMovie:null
}

const getters = {
    getMovies(state){
        return state.movies
    },
    getSearchedMovies(state){
        return state.searchedMovies
    },
    getSingleMovie(state){
        return state.singleMovie
    }
}

const mutations = {
    clearSearchedMoviesState(state){
        state.searchedMovies = []
    },
    setStateData(state, params){
        params.data.forEach((movie) => {
            state[params.type].push(movie)
        })
    },
    setSingleMovie(state, params){
        state.singleMovie = params
    }
}

const actions = { 
    async getMoviesAction({commit}){
        const { data, error } = await request('https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1', 'get')
        if(data){
            commit('setStateData', 
            {
                type:'movies',
                data:data.results
            })
        }
    },
    async searchMoviesAction({commit}, inputData){
        const { data, error } = await request(`https://api.themoviedb.org/3/search/movie?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1&query=${inputData}`, 'get')
        if(data){
            commit('clearSearchedMoviesState')
            commit('setStateData', 
            {
                type:'searchedMovies',
                data:data.results
            })
        }
    },
    async getSingleMovieAction({commit}, movieData){
        const { data, error } = await request(movieData, 'get')
        if(data){
            // console.log("data ", data)
            commit('setSingleMovie', data)
        }
    },
}

export default {
    state, getters, mutations, actions
}