import C from '../constants'
import { v4 } from 'uuid'

export const addAcclaim = (acclaim, criticism) =>
    ({
        type: C.ADD_ACCLAIM,
        id: v4(),
        acclaim,
        criticism,
        timestamp: new Date().toString()
    })

export const addRate = (rate, previous) =>
    ({
        type: C.ADD_RATE,
        rate,
	previous
    })

