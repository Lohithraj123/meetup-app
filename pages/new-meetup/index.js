import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const NewMeetUpPage = () => {

  const router = useRouter()

  const addMeetUpHandler = async (enteredMeetUpData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);

    router.push('/')
  };

  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};

export default NewMeetUpPage;
