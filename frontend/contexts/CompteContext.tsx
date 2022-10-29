import React from "react";
import { CompteProps } from "../screens/InscriptionScreen";

const initComptesState= {
    comptes: [{firstname:"Joan", lastname:"François",
            phone:"0143417250", email:"j.francois@cfa-insta.fr"},
            {firstname:"Mounira", lastname:"Coste",
            phone:"0143417250", email:"j.francois@cfa-insta.fr"},
            {firstname:"Faizah", lastname:"Badabhai",
            phone:"0143417250", email:"f.badabhai@cfa-insta.fr"},
            {firstname:"Selin", lastname:"Sert",
            phone:"0143417250", email:"s.sert@cfa-insta.fr"}]
  }

const comptesContextWrapper = (component?: React.Component) => ({
    ...initComptesState,
    addCompte:(compte: CompteProps)=>{
        initComptesState.comptes= [initComptesState.comptes, compte];
        component?.setState({ context: comptesContextWrapper(component) });
    }
  });
  
  type Context = ReturnType<typeof comptesContextWrapper>;


  
  export const CompteContext = React.createContext<Context>(comptesContextWrapper());
  
  interface State {
  context: Context;
  }
  
  export class ContactsContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
  state: State = {
    context: comptesContextWrapper(this),
  };
  
  render() {
    return (
      <CompteContext.Provider value={this.state.context}>
        {this.props.children}
      </CompteContext.Provider>
    );
  }
  }