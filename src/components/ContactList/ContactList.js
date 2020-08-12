import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  getContactsOperation,
  deleteContactOperation,
} from '../../redux/contacts/contactsOperations';
import {
  FilteredItemsSelector,
  isLoadingSelector,
} from '../../redux/contacts/contactsSelector';
import Loader from '../Loader/Loader';
import './ContactList.css';
const ContactList = ({ contacts, deleteContact, getContacts, loader }) => {
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="contacts-wrapper">
      {loader && <Loader />}
      {!loader && (
        <TransitionGroup component="ul" className="list">
          {contacts.map(({ name, number, id }) => {
            return (
              <CSSTransition key={id} classNames="change" timeout={250}>
                <li className="item">
                  <p className="list-name"> {name} </p>
                  <p className="list-phone"> {number} </p>
                  <button
                    onClick={() => deleteContact(id)}
                    className="list-btn"
                  >
                    X
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: FilteredItemsSelector(state),
    loader: isLoadingSelector(state),
  };
};
const mapDispatchToProps = {
  deleteContact: deleteContactOperation,
  getContacts: getContactsOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
