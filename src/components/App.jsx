import { Component } from 'react';
import { Layout } from './Layout';
import 'modern-normalize';
import { NewContact } from './NewContact/NewContact';
import { Output } from './Outputs/Output';
import { nanoid } from 'nanoid';

export const App = () => {
  return (
    <Layout>
      <ContactPhoneBuch />
    </Layout>
  );
};

export class ContactPhoneBuch extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeReqFilter = newRequest => {
    this.setState({ filter: newRequest });
  };

  getFiltrDataCont = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  contactsDeleter = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  contactsAdder = values => {
    const { name, number } = values;
    const aktualCont = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (aktualCont) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <div>
        <NewContact onAdd={this.contactsAdder} />
        <Output
          datas={this.getFiltrDataCont()}
          deleteCont={this.contactsDeleter}
          datasSearch={this.state.filter}
          onChangeReq={this.changeReqFilter}
        />
      </div>
    );
  }
}
