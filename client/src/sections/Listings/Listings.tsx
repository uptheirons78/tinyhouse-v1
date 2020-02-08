import React from 'react';
// Fetch Method
import { server } from '../../lib/api';
// Types
import { ListingsData, DeleteListingData, DeleteListingVariables } from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

// Types definition
interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  // Query Data
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data);
  };

  // Mutation Query: Delete
  const deleteListing = async () => {
    const { data } = await server.fetch<DeleteListingData, DeleteListingVariables>({
      query: DELETE_LISTING,
      variables: {
        id: '5e3d71dc6005a637dccb5baa'
      }
    });
    console.log(data);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
      <button onClick={deleteListing}>Delete Listings!</button>
    </div>
  );
};
