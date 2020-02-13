import React from 'react';
import { gql } from 'apollo-boost';
// Fetch Method with React Apollo
import { useQuery, useMutation } from 'react-apollo';
// Types
import {Listings as ListingsData} from './__generated__/Listings';
import {DeleteListing as DeleteListingData, DeleteListingVariables} from "./__generated__/DeleteListing";


const LISTINGS = gql`
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

const DELETE_LISTING = gql`
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

  // Custom Hook to fetch data from the server
  const {data, loading, error, refetch} = useQuery<ListingsData>(LISTINGS);
  // Custom Hook to run a delete mutation
  const [deleteListing, {loading: deleteListingLoading, error: deleteListingError}] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

  // Mutation Query: Delete
  const handleDeleteListing = async (id: string) => {
    await deleteListing({ variables: { id }});
    refetch();
  };

  const listings = data ? data.listings : null;

  // List of listings
  const listingsList = listings
    ? <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            {listing.title}
            <button onClick={() => handleDeleteListing(listing.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    : null;

    if(loading) {
      return <h2>Loading...</h2>;
    }

    if(error) {
      return <h2>Ops...Something went really wrong! Please try again</h2>;
    }

    const deleteListingLoadingMessage = deleteListingLoading
      ? (<h4>Deletion in progress</h4>)
      : null;

      const deleteListingErrorMessage = deleteListingError
      ? (<h4>Ops something went wrong. Try again!</h4>)
      : null;

  return (
    <div>
      <h2>{title}</h2>
      {listingsList}
      {deleteListingLoadingMessage}
      {deleteListingErrorMessage}
    </div>
  );
};
