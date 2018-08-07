const state = {
    longtitude: 114,
    latitude: 23
}

const getters = {

}

const mutations = {
    modifyUsername(state, params){
        console.log('location mutations 触发了');
    }
}

const actions = {
    reName(){
        console.log('location actions 触发了');
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}