import C from '../constants'

export const acclaim = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_ACCLAIM:
            return {
                id: action.id,
                acclaim: action.acclaim,
		criticism: action.criticism,
                timestamp: action.timestamp
            }
        default :
            return state
    }
}

export const acclaims = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ACCLAIM :
            return [
                ...state,
                acclaim({}, action)
            ]
        default:
            return state
    }
}

export const rate = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_RATE:
	    let curr = action.rate
	    let prev = (isNaN(action.previous)) ? 0 : action.previous
	    if(action.rate > 0) {
		let result = prev
		if (curr != prev) {
			result = (prev + curr) / 2
		}
            	return {
                	rate: result
            	}
	    }
	    return {
                rate: prev
            }
        default :
            return state
    }
}
