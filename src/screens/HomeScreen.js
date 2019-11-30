import React from "react"
import { StyleSheet, View, FlatList } from "react-native"
import axios from "axios"
import { connect } from "react-redux"
import { TripInfoItem } from "../components"

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  }

  state = {
    trips: [],
    isLoading: false
  }

  componentDidMount() {
    const { saveTrips } = this.props

    this.onRefresh()
  }

  onRefresh = () => {
    axios("https://api.gigacover.com/recruitment/challenge")
      .then(res => {
        if (!res || res.status != 200) {
          Toast("Lỗi dữ liệu trả về")
          return
        }
        this.setState({ trips: res.data.trips })
      })
      .catch(e => {
        Toast("Lỗi dữ liệu trả về")
        return
      })
  }

  onItemPress = (item, index) => {
    this.props.navigation.navigate("Details", {
      item,
      index
    })
  }

  renderItems = ({ item, index }) => {
    const props = {
      item: item,
      onPress: () => this.onItemPress(item, index)
    }
    if (index == 0) {
      props.style = { marginTop: 10 }
    }

    return <TripInfoItem {...props} />
  }

  render() {
    const { trips, isLoading } = this.state

    return (
      <FlatList
        data={trips}
        refreshing={isLoading}
        onRefresh={this.onRefresh}
        renderItem={this.renderItems}
        keyExtractor={item => item.trip_id.toString()}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
      />
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1
  },
  list: {
    flex: 1,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "red"
  }
})

const mapDispatchToProps = dispatch => {
  const { saveTrips } = require("../../redux/TripReducer")

  return {
    saveTrips: () => dispatch(saveTrips())
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen)
