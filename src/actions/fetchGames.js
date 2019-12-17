import $ from 'jquery';

// http://www.giantbomb.com/api/search?api_key=[YOUR-KEY]&format=[RESPONSE-DATA-FORMAT]&query=[YOUR-SEARCH]&resources=[SOME-TYPES]

export const fetchGames = (searchInput) => {
    let searchGamesURL = `http://www.giantbomb.com/api/search/?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}&resources=game&field_list=id,guid,name,image,api_detail_url,deck,platforms`;

    return dispatch => {
        dispatch({ type: 'LOADING_GAMES' })

        $.ajax({
            url: searchGamesURL,
            dataType: "jsonp",
            jsonp: 'json_callback',
            data: {
                format: 'jsonp',
            },
            success: function(res) {
                res.results.map(game => {
                    return dispatch({
                        type: 'ADD_GAME',
                        payload: { [game.guid]: game }
                    });
                });
            }
        });
    }
}