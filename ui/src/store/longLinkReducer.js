export const defaultState = {
    links: [],
    newId: 0
}

const ADD_LINK = 'ADD_LINK';
const INCREASE_NEW_ID = 'INCREASE_NEW_ID';

export const longLinkReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_LINK:
            return {
                ...state, links: [...state.links, action.newLink]

            }
        case INCREASE_NEW_ID: {
            return { ...state, newId: state.newId + 1 };
        }
        default: 
            return state;
    }
}

export const addValidLink = (newLink) => ({type: ADD_LINK, newLink});
export const increaseNewId = () => ({type: INCREASE_NEW_ID});
