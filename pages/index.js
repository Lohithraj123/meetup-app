import { Inter } from 'next/font/google';
import MeetupList from '@/components/meetups/MeetupList';

const inter = Inter({ subsets: ['latin'] });

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.YUI2W_3AYOxsG_STV-PJpAHaFj&pid=Api&P=0&h=180',
    address: 'Some Address 1',
    description: 'THis is the first meet up',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.YUI2W_3AYOxsG_STV-PJpAHaFj&pid=Api&P=0&h=180',
    address: 'Some Address 2',
    description: 'THis is the second meet up',
  },
];

export default function Home(props) {

  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}
