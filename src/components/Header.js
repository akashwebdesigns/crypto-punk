import React from 'react';
import {AppBar,Container,Toolbar,Typography,Select, MenuItem,createTheme,ThemeProvider} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"white",
        fontWeight:"bold",
        fontFamily: "Montserrat",
        cursor:"pointer"
    },

}))




const Header = () => {

  const classes=useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary:{
        main:"#fff"
      },
      type: "light",
    },
  });

  const { currency, setCurrency } = CryptoState();


  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar color='primary' position="static">
          <Container>
              <Toolbar>
                 <Typography onClick={()=>navigate("/")} className={classes.title} variant='h6'>CryptoPunk</Typography>
                    <Select
                        variant='outlined'
                        style={{                       
                            width:100,
                            height:40,
                            marginRight:15,
                            color:"white",
                            backgroundColor:"#3b8ad9"
                        }}
                        value={currency}
                        onChange={(e)=>setCurrency(e.target.value)}>
                        <MenuItem value={"INR"}>INR</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>
                    </Select>
              </Toolbar>
          </Container>
      </AppBar>
      </ThemeProvider>
  );
};

export default Header;
