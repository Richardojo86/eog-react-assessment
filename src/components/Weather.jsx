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

const Weather = ({ name, weather_state_name, temperatureinFahrenheit }) => {
  return (
    <Chip
      label={`Weather in ${name}: ${weather_state_name} and ${temperatureinFahrenheit}°`}
    />
  );
};

export default connect(
  ({ weather: { name, weather_state_name, temperatureinFahrenheit } }) => ({
    name,
    weather_state_name,
    temperatureinFahrenheit,
  })
)(Weather);
