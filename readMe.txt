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