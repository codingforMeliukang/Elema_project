const state = {
    username: 'zhangsan',
    userId: '007',
    birthYear: '1999'
}

const getters = {
    age(state){
        console.log(state);
        return (new Date().getFullYear()) - state.birthYear;
    }
}

const mutations = {
    modifyUsername(state, params){
        console.log('user mutations 触发了');
        state.username = params.value;
    }
}

const actions = {
    reName(context, params){
        console.log('user actions 触发了');
        context.commit('modifyUsername', params);
    }
}

export default {
    //命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}