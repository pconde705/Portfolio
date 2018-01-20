import {connect} from 'react-redux';
import {fetchAllProjects} from '../../actions/project_actions';
import Projects from './projects';

const mapStateToProps = state => {
    return {
        projects: Object.values(state.projects)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllProjects: () => dispatch(fetchAllProjects())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects)