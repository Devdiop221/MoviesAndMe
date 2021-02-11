const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
    let nextSate
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
        const favoriteFimlmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
        if ( favoriteFimlmIndex !== -1 ) {
            //Supression
            nextSate = {
                ...state,
                favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFimlmIndex)
            }
        }
        else {
            //Ajout
            nextState = {
                ...state,
                favoritesFilm: [...state.favoritesFilm, acion.value]
            }
        }
        return nextSate || state
        default:
        return nextSate
    }
}

export default toggleFavorite