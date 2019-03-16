import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  wrapper: {
    background: theme.palette.background.main,
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
