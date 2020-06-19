export const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({type: 'ADD_PROJECT', project: project});
    };
};