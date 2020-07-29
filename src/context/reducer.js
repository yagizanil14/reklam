export function reducer (state,action) {
    console.log(state)
    switch (action.type) {
        case "TOTAL_FALSES":
            state.total.trues = state.total.trues +1
            return{...state}
        case "TOTAL_TRUES":
            state.total.falses = state.total.falses +1
            return{...state}
        case "TOTAL_RESET":
            state.total.falses = 0
            state.total.trues = 0
            return{...state}
        case "RİGHT_PLUS":
            state.right = state.right +1
            return{...state}
        case "RİGHT_DOWN":
            state.right = state.right -1
            return{...state}
        default:
            return state;
    }
}