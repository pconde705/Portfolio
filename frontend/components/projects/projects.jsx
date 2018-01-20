import React from 'react'

class Projects extends React.Component{

    componentDidMount() {
        this.props.fetchAllProjects();
    }
    render() {
        return (
            <div>
                <h1>Projects</h1>
            </div>
        )
    }
}

export default Projects;