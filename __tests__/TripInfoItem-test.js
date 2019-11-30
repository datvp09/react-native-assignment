import 'react-native';
import React from 'react';
import {TripInfoItem} from '../src/components';
import renderer from 'react-test-renderer';

describe('TripInfoItem', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = renderer
        .create(
          <TripInfoItem
            item={{
              trip_id: 17094,
              distance: 16,
              duration: 1956,
              end_time: '2017-07-04T08:23:12+0000',
              start_time: '2017-07-04T07:50:36+0000',
            }}
            style={{}}
          />,
        )
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
