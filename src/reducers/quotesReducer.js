export default (state = {}, action) => {
    switch (action.type) {
        case 'RANDOM_QUOTES_RETRIEVED':
            return Object.assign({}, state, { quotes: action.quotes });
    }
    return state;
}