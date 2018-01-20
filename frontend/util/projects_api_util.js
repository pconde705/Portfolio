
export const getProjects = () => (
    $.ajax({
        method: 'GET',
        url: 'api/projects'
    })
)