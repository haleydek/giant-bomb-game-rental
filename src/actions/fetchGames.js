// http://www.giantbomb.com/api/search?api_key=[YOUR-KEY]&format=[RESPONSE-DATA-FORMAT]&query=[YOUR-SEARCH]&resources=[SOME-TYPES]
let searchInput;
const searchGamesURL = `https://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query=${searchInput}&resources=game&field_list=id,guid,name,image,api_detail_url,deck,platforms`;