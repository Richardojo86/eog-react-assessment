import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardHeaderRaw from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  Card,
  CardHeader as CardHeaderRaw,
  CardContent,
  LinearProgress,
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
    margin: '5% 25%',
  },
};

const Dashboard = ({
  loading,
  classes,
  latitude,
  longitude,
  tempF,
  tempC,
  lastRecieved,
}) => {
  const temperature = `${tempF}°F ${tempC}°C`;

  return loading ? (
    <LinearProgress />
  ) : (
    <Card className={classes.card}>
      <CardHeader title="Dashboard" />
      <CardContent>
        <p>Temperature: {temperature}</p>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Last Recieved: {lastRecieved}</p>
      </CardContent>
    </Card>
  );
};

export default connect(({ weather }) => ({
  loading: weather.loading,
  latitude: weather.latitude,
  longitude: weather.longitude,
  tempF: weather.temperatureinFahrenheit,
  tempC: weather.temperatureinCelsius,
  lastRecieved: null,
}))(withStyles(styles)(Dashboard));
