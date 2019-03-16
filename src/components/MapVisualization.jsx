import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardHeader as CardHeaderRaw,
  CardContent,
  withStyles,
} from '@material-ui/core';

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    flexGrow: 1,
    margin: '0 5%',
  },
};

const MapVisualization = ({
  classes,
  latitude,
  longitude,
  temperatureinFahrenheit,
  temperatureinCelsius,
  lastReceived,
}) => {
  const temperature = `${temperatureinFahrenheit}°F ${temperatureinCelsius}°C`;

  return (
    <Card className={classes.card}>
      <CardHeader title="Map Visualization" />
      <CardContent>
        <p>Temperature: {temperature}</p>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Last Received: {lastReceived}</p>
      </CardContent>
    </Card>
  );
};

export default connect(
  ({
    weather: {
      loading,
      latitude,
      longitude,
      temperatureinFahrenheit,
      temperatureinCelsius,
    },
    drone: { lastReceived },
  }) => ({
    loading,
    latitude,
    longitude,
    temperatureinFahrenheit,
    temperatureinCelsius,
    lastReceived,
  })
)(withStyles(styles)(MapVisualization));
