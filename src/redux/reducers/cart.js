const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART': {
			const currentPizzaItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload]

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: getTotalPrice(currentPizzaItems),
				},
			}
			const items = Object.values(newItems).map((obj) => obj.items)
			const allPizzas = [].concat.apply([], items)
			return {
				...state,
				items: newItems,
				totalCount: allPizzas.length,
				totalPrice: getTotalPrice(allPizzas),
			}
		}
		case 'REMOVE_CART_ITEM':
			const newItems = {
				...state.items,
			}
			const currentTotalPrice = newItems[action.payload].totalPrice
			const currentTotalCount = newItems[action.payload].items.length
			delete newItems[action.payload]
			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			}
		case 'PLUSE_ITEM': {


			const pluseItem = [...state.items[action.payload].items, state.items[action.payload].items[0]]
			const newItems = {
				...state.items,
				[action.payload]: {
					items: pluseItem,
					totalPrice: getTotalPrice(pluseItem),
				},
			}
			const currentTotalPrice = newItems[action.payload].totalPrice
			const currentTotalCount = newItems[action.payload].items.length
			return {
				...state,
				items: newItems,
				totalCount: currentTotalCount,
				totalPrice: currentTotalPrice
			}
		}
		case 'MINUS_ITEM': {

			const oldItems = state.items[action.payload].items
			const minusItem =
				oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

			const newItems = {
				...state.items,
				[action.payload]: {
					items: minusItem,
					totalPrice: getTotalPrice(minusItem),
				},
			}
			const currentTotalCount = newItems[action.payload].items.length
			const currentTotalPrice = newItems[action.payload].totalPrice

			return {
				...state,
				items: newItems,
				totalCount: currentTotalCount,
				totalPrice: currentTotalPrice
			}
		}
		case 'CLEAR_CART':
			return {
				totalPrice: 0,
				totalCount: 0,
				items: {},
			}

		default:
			return state
	}
}
export default cart
