import React, { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail
        image="https://tse1.mm.bing.net/th?id=OIP.YUI2W_3AYOxsG_STV-PJpAHaFj&pid=Api&P=0&h=180"
        title="First Meetup"
        address="Some first meet up"
        description="THis is the first meet up"
      />
    </>
  );
};

export default MeetupDetails;
