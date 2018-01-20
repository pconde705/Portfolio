import {getProjects} from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";

const receiveProjects = (projects) => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
})

export const fetchAllProjects = () => dispatch => (
    getProjects().then(projects => dispatch(receiveProjects(projects)))
)