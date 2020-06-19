1. to combine to reducers, we have to import combineReducers from redux:

    import authReducer from './authReducer';
    import projectReducer from './projectReducer';
    import { combineReducers } from 'redux';


    const rootReducer = combineReducers({
        auth: authReducer,
        project: projectReducer
    });

export default rootReducer;

2. To use it we have to import it in Index.js and use it in createStore function:

    import  rootReducer  from './stores/reducers/rootReducer';
    import { Provider } from 'react-redux';

    const store = createStore(rootReducer);

    ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
    );

3. to use it in components first, you have to import connect from react-redux,
    and make a mapStateToProps function:

        import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    };
}
export default connect(mapStateToProps)(Dashboard);

4. We can get and update state in component itself, in life cycle hooks
    and dispatch an action to update the store, but in this way we don't
    have true separation of concern.

5. so we don't want to use async task in the component itself and we 
    can't use it in the reducer itself, we can do this with Thunk middleware
    between dispatching an action and the reducer: 

    a. first install redux-thunk: 
        npm install redux-thunk

    b. then in index.js we have to import thunk and applyMiddleware:

            import { createStore, applyMiddleware } from 'redux';
            import thunk from 'redux-thunk';

    c. then use applyMiddleware and store enhancer(thunk) for the store:

        const store = createStore(rootReducer, applyMiddleware(thunk));


    d. normally we make separate .js file for action creators, and we return 
        actions, and we dispatch this action in the component for example: 

        export createProject = (project) => {
            return {
                type: 'ADD_PROJECT'
                project: project
            }
        }

        mapDispatchToProps = (dispatch, ownProps) => {
            return {
                addProject: (project) => {
                    dispatch(createProject(project))
                }
            }
        }
    
    now by using thunk, in action creators, we return functions instead of 
    action, and in this function we can perform async tasks: 

        export createProject = (project) => {
            return (dispatch, getState) => {
                // perform async task
                dispatch({type: 'ADD_PROJECT', project: project})
            }
        };

        mapDispatchToProps = (dispatch, ownProps) => {
            return {
                addProject: (project) => {
                    dispatch(createProject(project))
                }
            }
        }

6. We can initialize our firebase project with in two way: 

    first: 

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.15.2/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->

    <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyC1D3GjrHk7SZfS1ep7PUdz1rmBdtykwGk",
        authDomain: "appman-ff99c.firebaseapp.com",
        databaseURL: "https://appman-ff99c.firebaseio.com",
        projectId: "appman-ff99c",
        storageBucket: "appman-ff99c.appspot.com",
        messagingSenderId: "45077490891",
        appId: "1:45077490891:web:5b879d8666e1d1dfe9bf4e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    </script>

    or instead of using tags at the top we can use firebase cli

    import firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/auth'

