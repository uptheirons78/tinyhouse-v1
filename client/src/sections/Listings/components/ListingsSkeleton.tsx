import React from 'react';
import { Alert, Divider, Skeleton } from 'antd';
import "./ListingsSkeleton.css"

interface Props {
  title: string;
  error?: boolean;
}

export const ListingsSkeleton = ({ title, error = false }: Props) => {
  const errorAlert = error ? (
    <Alert
      type="error"
      message="Something went wrong! Try again later"
      className="listings-skeleton__alert"
    />
    )
    : null;

  return (
    <div className="listings-skeleton">
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{rows: 1}} />
      <Divider />
      <Skeleton active paragraph={{rows: 1}} />
      <Divider />
      <Skeleton active paragraph={{rows: 1}} />
      <Divider />
    </div>
  )
};
