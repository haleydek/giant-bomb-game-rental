const gamesReducer = (state = {
    byGuid: {},
    allGuids: [],
    loading: false
}, action) => {
    switch (action.type) {

        case 'LOADING_GAMES':
            console.log("loading games");
            return {
                ...state,
                loading: true
            }
        
        case 'ADD_GAME':
        // add search results to state (Object for for each game)
        // use each game's unique guid as its key

            return {
                ...state,
                byGuid: {
                    ...state.byGuid,
                    ...action.payload
                },
                allGuids: [
                    ...state.allGuids,
                    Object.keys(action.payload)[0]
                ],
                loading: false
            }

        default:
            return state;
    }
}

export default gamesReducer;