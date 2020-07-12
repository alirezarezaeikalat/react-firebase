export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // perform async code
        dispatch({type: 'CREATE_PROJECT', project: project});
    };
};