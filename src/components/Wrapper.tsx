import React from 'react';
import { withStyles, Theme } from '@material-ui/core';
import { TypeBackground } from '@material-ui/core/styles/createPalette';

interface BackgroundWithMain extends TypeBackground {
  main: string;
}

const styles = (theme: Theme) => ({
  wrapper: {
    background: (theme.palette.background as BackgroundWithMain).main,
    height: '90vh',
  },
});

interface Props {
  classes: any;
}

const Wrapper: React.SFC<Props> = ({ classes, children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default withStyles(styles)(Wrapper);
