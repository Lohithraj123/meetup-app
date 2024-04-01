import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import React, { Fragment } from 'react';

const NewMeetUpPage = () => {
  const addMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData)
  };

  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};

export default NewMeetUpPage;
