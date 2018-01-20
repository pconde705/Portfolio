import { RECEIVE_ALL_PROJECTS} from '../actions/project_actions'

const projectsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}

export default projectsReducer;