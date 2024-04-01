import React, { Fragment } from 'react';

const MeetupDetail = (props) => {
  return (
    <Fragment>
      <img src={props.image} alt="A first meet" />
      <h1>{props.title}</h1>
      <address>{props.address} </address>
      <p>{props.description}</p>
    </Fragment>
  );
};

export default MeetupDetail;
