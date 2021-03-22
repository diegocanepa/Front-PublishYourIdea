import { ADD_IDEA_ERROR, ADD_IDEA_LOADING, ADD_IDEA_SUCCESS, DELETE_IDEA_ERROR, DELETE_IDEA_LOADING, DELETE_IDEA_SUCCESS, IDEAS_LOADING, IDEAS_LOAD_ERROR, IDEAS_LOAD_SUCCESS, UPDATE_IDEA_ERROR, UPDATE_IDEA_LOADING, UPDATE_IDEA_SUCCESS } from "../../constants/actionTypes";

const idea = (state, {payload, type}) => {
    switch (type) {
        case IDEAS_LOADING: {
            return {
                ...state,
                idea: {
                    ...state,
                    loading: true,
                }
            }
        }

        case IDEAS_LOAD_SUCCESS: {
            return {
                ...state,
                idea: {
                    ...state,
                    loading: false,
                    data: payload
                }
            }
        }

        case IDEAS_LOAD_ERROR: {
            return {
                ...state,
                idea: {
                    ...state,
                    loading: false,
                    error: payload,
                }
            }
        }

        case DELETE_IDEA_SUCCESS: {
            return {
                ...state,
                idea: {
                    ...state.idea,
                    loading: false,
                    data: state.idea.data.filter((item) => item.idIdea !== payload),
                }
            }
        }
        

        case DELETE_IDEA_LOADING:{
            return {
                ...state,
                idea: {
                    ...state.idea,
                    loading: false,
                    data: state.idea.data.map((item) => {
                        if(item.idIdea === payload){
                            return {...item, deleting: true};
                        }

                        return item;
                    }),
                }
            }
        }

        case DELETE_IDEA_ERROR: {
            return null;
        }

        case ADD_IDEA_LOADING: {
            return {
                ...state,
                addIdea: {
                    ...state.addIdea,
                    loading: true,
                    error: null
                }
            }
        }

        case ADD_IDEA_SUCCESS: {
            return {
                ...state,
                addIdea: {
                    ...state.addIdea,
                    loading: false,
                    error: null,
                    data: payload
                },

                idea: {
                    ...state.idea,
                    loading: false,
                    data: [payload, ...state.idea.data]
                }
            }
        }

        case ADD_IDEA_ERROR:{
            return {
                ...state,
                addIdea: {
                    ...state.addIdea,
                    loading: false,
                }
            }
        }

        case UPDATE_IDEA_LOADING: {
            return {
                ...state,
                updateIdea: {
                    ...state.updateIdea,
                    loading: true,
                }
            }
        }

        case UPDATE_IDEA_SUCCESS: {
            return {
                ...state,
                updateIdea: {
                    ...state.updateIdea,
                    loading: false,
                    data: payload
                },

                idea: {
                    ...state.idea,
                    loading: false,
                    data: state.idea.data.map((item) => {
                        if(item.idIdea === payload.idIdea){
                            return payload;
                        }

                        return item;
                    }),
                }
            }
        }

        case UPDATE_IDEA_ERROR: {
            return {
                ...state,
                updateIdea: {
                    ...state.updateIdea,
                    loading: false,
                    error: payload,
                },
            }
        }

        default:
            return {...state};
    }
}

export default idea;