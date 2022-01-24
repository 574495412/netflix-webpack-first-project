import Navbar from "./Navbar/navbar";
import Movie from "./Movie/movie";
import Home from "./Home/home";
import Favorite from "./Favorite/favorite";
import Register from "./Register/Register";
import SignIn from "./Register/SignIn";
import MovieDetails from "./Movie/movieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/sign" exact component={SignIn} />
          <Route path="/movies" exact component={Movie}></Route>
          <Route path="/favorite" exact component={Favorite}></Route>
          <Route path={`/details/`} exact component={MovieDetails}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
