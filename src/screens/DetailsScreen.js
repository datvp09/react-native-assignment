import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

export class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const {navigation} = this.props;
    const item = navigation.getParam('item', {});
    const {trip_id, distance, duration, end_time, start_time} = item;
    const startTimeText = moment(start_time)
      .utc()
      .format('H:mm, D/M/YYYY');
    const endTimeText = moment(end_time)
      .utc()
      .format('H:mm, D/M/YYYY');

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {'TripId: '}
          <Text style={styles.textRegular}>{trip_id}</Text>
        </Text>
        <Text style={styles.text}>
          {'Distance: '}
          <Text style={styles.textRegular}>{distance}</Text>
        </Text>
        <Text style={styles.text}>
          {'Duration: '}
          <Text style={styles.textRegular}>{duration}</Text>
        </Text>
        <Text style={styles.text}>
          {'Start time: '}
          <Text style={styles.textRegular}>{startTimeText}</Text>
        </Text>
        <Text style={styles.text}>
          {'End time: '}
          <Text style={styles.textRegular}>{endTimeText}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  textRegular: {
    fontWeight: 'normal',
  },
});

const mapStateToProps = state => {
  return {
    trips: state.trip.trips,
  };
};

export default connect(mapStateToProps)(DetailsScreen);
