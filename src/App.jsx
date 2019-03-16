import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Wrapper from './components/Wrapper';
import createStore from './store';
import Dashboard from './components/Dashboard';
import MapVisualization from './components/MapVisualization';
import GraphVisualization from './components/GraphVisualization';
import { Grid } from '@material-ui/core';

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      main: 'rgb(226,231,238)',
    },
  },
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Dashboard />
          </Grid>
          <Grid item xs={6}>
            <GraphVisualization />
          </Grid>
          <Grid item xs={12}>
            <MapVisualization />
          </Grid>
        </Grid>
        <ToastContainer />
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
