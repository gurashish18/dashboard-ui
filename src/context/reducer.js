export const appReducer = (state, action) => {
    switch (action.type) {

        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };

        case "ADD_PRODUCT":
            return {
                ...state,
                products: action.payload
            };

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: action.payload
            }

        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: action.payload
            };

        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}