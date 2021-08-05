import {
  Logo,
  AppWrapper,
  Navigation,
  Header,
  PlanetLoader,
  ErrorBoundary,
} from "./components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import theme from "./theme";
import { WelcomePage, PeoplePage, PlanetsPage, StarshipPage } from "./pages";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-weight: normal;
  }
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <Header>
            <Logo />
            <Navigation />
          </Header>
          <main>
            <ErrorBoundary>
              <PlanetLoader />
            </ErrorBoundary>
            <ErrorBoundary>
              <Switch>
                <Route path="/" exact>
                  <WelcomePage />
                </Route>
                <Route path="/people">
                  <PeoplePage />
                </Route>
                <Route path="/planets">
                  <PlanetsPage />
                </Route>
                <Route path="/starships">
                  <StarshipPage />
                </Route>
                <Redirect to="/" />
              </Switch>
            </ErrorBoundary>
          </main>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
