import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
import { makeStyles } from '@material-ui/core';




function App() {

  
  const useStyles = makeStyles(() => ({
    App: {
      // backgroundColor: '#14161a',
      backgroundColor: 'white',
      color: "white",
      fontFamily: "Roboto",
      minHeight: "100vh"
    }
  }))

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<Coinpage />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
