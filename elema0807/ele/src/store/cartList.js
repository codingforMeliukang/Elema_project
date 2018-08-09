const state = {
    data: []
}

const getters = {
    
}

const mutations = {
    modifyData(state, params){
        state.data = params;
    }
}

const actions = {
    add(context, options){
        console.log('add');

        let newData = context.state.data.map(item=>{
            if(item.id == options.id){
                item.count ++;
            }
            return item;
        })

        context.commit('modifyData', newData);

    },
    reduce(context, options){
        console.log('reduce');

        let newData = context.state.data.map(item=>{
            if(item.id == options.id){
                item.count --;
            }
            return item;
        })

        context.commit('modifyData', newData);
    },
    addGoods(){

    },
    removeGoods(){
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}