import { LandingPage, MorePage, MoviesPage, PeoplePage, TvShowsPage, LoginPage, LoginPageDua, ConfirmationPage, FinishRegisterPage } from "./pages"
import { Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index"

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/movie">
          <MoviesPage/>
        </Route>
        <Route path="/more">
          <MorePage/>
        </Route>
        <Route path="/tvshow">
          <TvShowsPage/>
        </Route>
        <Route path="/people">
          <PeoplePage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/logindua">
          <LoginPageDua/>
        </Route>
        <Route path="/confirmation">
          <ConfirmationPage/>
        </Route>
        <Route path="/finishregister">
          <FinishRegisterPage/>
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
