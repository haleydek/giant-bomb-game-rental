const gamesReducer = (state = {
    loading: false
}, action) => {
    switch (action.type) {

        case 'LOADING_GAMES':
            return {
                ...state,
                loading: true
            }
        
        case 'ADD_GAMES':
            return {
                ...state,
                // add search results to state. Object for for each game.
                // use each game's unique id as its key
                loading: false
            }

        default:
            return state;
    }
}

export default gamesReducer;