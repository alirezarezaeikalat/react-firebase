export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //
        dispatch({type: 'ADD_PROJECT', project: project});
    };
};