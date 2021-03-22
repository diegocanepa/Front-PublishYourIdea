import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import routes from './routes';
import { GlobalProvider } from './context/Provider';
import isAuthenticated from './utils/isAuthenticated';
import GlobalStyles from './app/components/GlobalStyle';

const RenderRoute = (route, key) => {

  const history = useHistory();
  console.log("isAuthenticated", isAuthenticated());
  console.log("needsAuth", route.needsAuth);

  if (route.needsAuth && !isAuthenticated()) {
    history.push("/auth/login")
  }

  return (
    <Route
      key={key}
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  )
}

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Router>
        <Switch>
          {routes.map((route, index) => (<RenderRoute {...route} key={index} />))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}


export default App;
