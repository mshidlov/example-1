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
import { DrorList } from "./dror/DrorList";
import { DrorCreate } from "./dror/DrorCreate";
import { DrorEdit } from "./dror/DrorEdit";
import { DrorShow } from "./dror/DrorShow";
import { MorList } from "./mor/MorList";
import { MorCreate } from "./mor/MorCreate";
import { MorEdit } from "./mor/MorEdit";
import { MorShow } from "./mor/MorShow";
import { AndrewList } from "./andrew/AndrewList";
import { AndrewCreate } from "./andrew/AndrewCreate";
import { AndrewEdit } from "./andrew/AndrewEdit";
import { AndrewShow } from "./andrew/AndrewShow";
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
          name="Dror"
          list={DrorList}
          edit={DrorEdit}
          create={DrorCreate}
          show={DrorShow}
        />
        <Resource
          name="Mor"
          list={MorList}
          edit={MorEdit}
          create={MorCreate}
          show={MorShow}
        />
        <Resource
          name="Andrew"
          list={AndrewList}
          edit={AndrewEdit}
          create={AndrewCreate}
          show={AndrewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
