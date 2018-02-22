import App from './App';
import { connect } from 'react-redux';
import { activateServiceMenu, disactiveServiceMenu } from '../redux/redux';

const mapStateToProps = (state, ownProps) => ({
    navReducer: state.navMenuReducer,
});

const mapDispatchToProps = {
    activateServiceMenu,
    disactiveServiceMenu,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer; 