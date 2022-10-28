import React from "react";
import { ContactProps } from "../components/ProfileUser";

const initContactsState= {
    contacts: [{firstname:"Joan", lastname:"François",
            phone:"0143417250", email:"j.francois@cfa-insta.fr"},
            {firstname:"Mounira", lastname:"Coste",
            phone:"0143417250", email:"j.francois@cfa-insta.fr"},
            {firstname:"Faizah", lastname:"Badabhai",
            phone:"0143417250", email:"f.badabhai@cfa-insta.fr"},
            {firstname:"Selin", lastname:"Sert",
            phone:"0143417250", email:"s.sert@cfa-insta.fr"}]
  }

const contactsContextWrapper = (component?: React.Component) => ({
    ...initContactsState,
    addContact:(contact: ContactProps)=>{
        initContactsState.contacts= [initContactsState.contacts, contact];
        component?.setState({ context: contactsContextWrapper(component) });
    }
  });
  
  type Context = ReturnType<typeof contactsContextWrapper>;
  
  export const ContactsContext = React.createContext<Context>(contactsContextWrapper());
  
  interface State {
  context: Context;
  }
  
  export class ContactsContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
  state: State = {
    context: contactsContextWrapper(this),
  };
  
  render() {
    return (
      <ContactsContext.Provider value={this.state.context}>
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
  }
  