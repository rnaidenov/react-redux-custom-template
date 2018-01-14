export default (state = [], action) => {
    switch (action.type) {
        case 'RANDOM_QUOTE_RETRIEVED':
            return Object.assign({}, state, { quote: action.quote });
    }
    return state;
}