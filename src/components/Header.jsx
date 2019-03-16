import React from 'react';
import { connect } from 'react-redux';
import { Typography, AppBar, Toolbar, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Weather from './Weather';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const Header = ({ classes, loading }) => {
  const name = "Kelvin Mai's";
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {name} EOG React Visualization Assessment
          </Typography>
          <Weather />
        </Toolbar>
      </AppBar>
      {loading && <LinearProgress />}
    </>
  );
};

export default connect(({ drone: { loading } }) => ({ loading }))(
  withStyles(styles)(Header)
);
