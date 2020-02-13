import React from 'react';
import { gql } from 'apollo-boost';
// Fetch Method with React Apollo
import { useQuery, useMutation } from 'react-apollo';
// Types
import {Listings as ListingsData} from './__generated__/Listings';
import {DeleteListing as DeleteListingData, DeleteListingVariables} from "./__generated__/DeleteListing";
// Ant Design Components
import {Alert, List, Avatar, Button, Spin} from "antd";
// Personal Components
import {ListingsSkeleton} from './components/ListingsSkeleton';
// Styles
import "./styles/listings.css";


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
    ? (
      <List
        itemLayout="horizontal"
        dataSource={listings}
        renderItem={(listing) => (
          <List.Item
            actions={[
            <Button
              type="primary"
              onClick={() => handleDeleteListing(listing.id)}
            >
              Delete
            </Button>
          ]}
          >
            <List.Item.Meta
              title={listing.title}
              description={listing.address}
              avatar={
                <Avatar
                  src={listing.image}
                  shape="square"
                  size={48}
                />
              }
            />
          </List.Item>
        )}
      />
    ) : null;

    if(loading) {
      return (
        <div className="listings">
          <ListingsSkeleton title={title}/>
        </div>
      );
    }

    if(error) {
      return (
        <div className="listings">
          <ListingsSkeleton title={title} error/>
        </div>
      );
    }

    const deleteListingErrorAlert = deleteListingError
    ? (
        <Alert
          type="error"
          message="Something went wrong! Try again later"
          className="listings__alert"
        />
      )
    : null;

  return (
    <div className="listings">
      <Spin spinning={deleteListingLoading}>
      {deleteListingErrorAlert}
      <h2>{title}</h2>
      {listingsList}
      </Spin>
    </div>
  );
};
