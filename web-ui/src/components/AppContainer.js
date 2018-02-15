import App from './App';
import { connect } from 'react-redux';
import { activateService, disactiveService } from '../redux/redux';

const mapStateToProps = (state, ownProps) => ({
    serviceRedux: state.serviceRedux,
});

const mapDispatchToProps = {
    activateService,
    disactiveService,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer; 