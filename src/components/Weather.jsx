import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import ChipRaw from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

import * as actions from '../store/actions';

const cardStyles = theme => ({
  root: {
    background: theme.palette.secondary.main,
  },
  label: {
    color: theme.palette.primary.main,
  },
});
const Chip = withStyles(cardStyles)(ChipRaw);

class Weather extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      loading,
      name,
      weather_state_name,
      temperatureinFahrenheit,
    } = this.props;
    if (loading) return <LinearProgress />;
    return (
      <Chip
        label={`Weather in ${name}: ${weather_state_name} and ${temperatureinFahrenheit}°`}
      />
    );
  }
}

export default connect(
  ({
    weather: { loading, name, weather_state_name, temperatureinFahrenheit },
  }) => ({
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit,
  }),
  dispatch => ({
    onLoad: () => dispatch({ type: actions.INITIALIZE_LONG_POLLING }),
  })
)(Weather);
