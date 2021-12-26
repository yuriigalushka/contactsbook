import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Auth from "./components/Auth";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";

function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <hr />
            <ProtectedRoute path={'/contacts'} component={Contacts} isAuth={props.isAuth} />
            <Route path={'/login'} component={Auth} />
            {props.loading && <Loader />}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        loading: state.app.loader,
        isAuth: !!state.app.token
    }
}

export default connect(mapStateToProps, null)(App);
