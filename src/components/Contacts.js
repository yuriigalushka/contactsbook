import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllContacts } from '../store/contacts/contactActions';
import AddContact from './AddContact';
import ContactsList from './ContactsList';
import ContactView from './ContactView';
import EditContact from './EditContact';

class Contacts extends Component {
    componentDidMount() {
        if (this.props.isAuth) {
            this.props.getAllContacts(this.props.token)
        }
    }

    render() {
        return (
            <div className="contacts">
                <Switch>
                    <Route path="/contacts" exact component={ContactsList} />
                    <Route path={'/contacts/add'} render={() =>
                        <>
                            <ContactsList />
                            <AddContact />
                        </>
                    } />
                    <Route path={'/contacts/:id/edit'} render={() =>
                        <>
                            <ContactsList />
                            <EditContact />
                        </>
                    } />
                    <Route path={'/contacts/:id'} render={() =>
                        <>
                            <ContactsList />
                            <ContactView />
                        </>
                    } />
                </Switch>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        isAuth: !!state.app.token,
        token: state.app.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllContacts: token => dispatch(getAllContacts(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);