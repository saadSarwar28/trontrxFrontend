const initialState = {
    homeItems: [],
    homeItem: {}
}

const homeReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case 'getHomeContent':
            return {
                ...state,
                homeItems: action.payload
            }

        default:
            return state
    }
}

export default homeReducers