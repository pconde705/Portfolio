import {connect} from 'react-redux';
import {fetchAllProjects} from '../../actions/project_actions';
import Projects from './projects';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    fetchAllProjects: () => dispatch(fetchAllProjects())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects)