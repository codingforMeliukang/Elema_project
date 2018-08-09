const state = {
    locValue: {
		longitude: null,
		latitude: null
	}
}

const mutations = {
    modifyLocation(state, params){
		state.locValue = params;
	}
}

const actions = {
    getLocation(context){
		setTimeout(()=>{
			context.commit('modifyLocation', {
				longitude: '113.837884',
				latitude: '22.626024'
			})
		}, 2000);
	},
    userSelectLocation(context, params){
		context.commit('modifyLocation', params);
	}
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}