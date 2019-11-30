import "react-native"
import React from "react"
import { HomeScreen } from "../src/screens"
import renderer from "react-test-renderer"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore()
const store = mockStore({})

describe("HomeScreen", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = renderer
        .create(
          <Provider store={store}>
            <HomeScreen />
          </Provider>
        )
        .toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
