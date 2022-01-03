import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ShmulikList } from "./shmulik/ShmulikList";
import { ShmulikCreate } from "./shmulik/ShmulikCreate";
import { ShmulikEdit } from "./shmulik/ShmulikEdit";
import { ShmulikShow } from "./shmulik/ShmulikShow";
import { SegalList } from "./segal/SegalList";
import { SegalCreate } from "./segal/SegalCreate";
import { SegalEdit } from "./segal/SegalEdit";
import { SegalShow } from "./segal/SegalShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app-3"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Shmulik"
          list={ShmulikList}
          edit={ShmulikEdit}
          create={ShmulikCreate}
          show={ShmulikShow}
        />
        <Resource
          name="Segal"
          list={SegalList}
          edit={SegalEdit}
          create={SegalCreate}
          show={SegalShow}
        />
      </Admin>
    </div>
  );
};

export default App;
