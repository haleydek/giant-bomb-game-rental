// http://www.giantbomb.com/api/search?api_key=[YOUR-KEY]&format=[RESPONSE-DATA-FORMAT]&query=[YOUR-SEARCH]&resources=[SOME-TYPES]

export const fetchGames = (searchInput) => {
    const searchGamesURL = `https://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query=${searchInput}&resources=game&field_list=id,guid,name,image,api_detail_url,deck,platforms`;

    return dispatch => {
        dispatch({ type: 'LOADING_GAMES' })
        fetch(searchGamesURL)
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON)
            return dispatch({type: 'ADD_GAMES', payload: resJSON})
        })
    }
}