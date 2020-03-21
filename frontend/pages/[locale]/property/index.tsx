import * as React from 'react';
import Property from '../../../components/Property';

const PropertyPage: React.FunctionComponent = () => (
  <Property
    properties={[
      {
        id: '1',
        title: 'Gebäude 1',
        rooms: [
          {
            id: '2',
            title: 'Room 2',
          },
        ],
      },
      {
        id: '2',
        title: 'Gebäude 2',
        rooms: [
          {
            id: '3',
            title: 'Room 1',
          },
          {
            id: '4',
            title: 'Room 4',
          },
        ],
      },
      {
        id: '3',
        title: 'Gebäude 3',
        rooms: [
          {
            id: '7',
            title: 'Room 7',
          },
        ],
      },
    ]}
  />
);
export default PropertyPage;
