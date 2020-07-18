export const createProject = (project) => {
    return (dispatch, getState, {getFirebase}) => {
        console.log("salam")
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'alireza',
            authorLastName: 'rezaei',
            createdAt: new Date()
        }).then(doc => {
            console.log(doc)
            dispatch({type: 'CREATE_PROJECT', project: project});
        }).catch(err => {
            console.log(err)
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    };
};