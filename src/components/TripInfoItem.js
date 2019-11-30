import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native"
import moment from "moment"

export default class TripInfoItem extends Component {
  onItemPress = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    const { item, style } = this.props
    const { trip_id, distance, duration, end_time, start_time } = item
    const startTimeText = moment(start_time)
      .utc()
      .format("H:mm, D/M/YYYY")
    const endTimeText = moment(end_time)
      .utc()
      .format("H:mm, D/M/YYYY")

    return (
      <TouchableWithoutFeedback onPress={this.onItemPress}>
        <View style={[styles.rootView, style]}>
          <View style={styles.container}>
            <Text style={styles.text}>{"TripId: " + trip_id}</Text>
            <Text style={styles.text}>{"Distance: " + distance}</Text>
            <Text style={styles.text}>{"Duration: " + duration}</Text>
          </View>
          <View style={styles.containerBig}>
            <Text style={styles.text}>{"Start time: " + startTimeText}</Text>
            <Text style={styles.text}>{"End time: " + endTimeText}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  containerBig: {
    flex: 3
  },
  rootView: {
    backgroundColor: "white",
    borderRadius: 4,
    opacity: 0.9,
    marginHorizontal: 7,
    marginBottom: 10,
    padding: 10,
    paddingBottom: 12,
    flexDirection: "row"
  },
  text: {
    color: "black",
    fontSize: 12
  }
})
