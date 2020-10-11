import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import { Event } from '../models/event.interface';
import { getOrdinalNumber, months } from '../utils/date';
import EventbriteLogo from '../assets/eventbrite-logo.png';
import MeetupLogo from '../assets/meetup-logo.png';
import NotFoundImage from '../assets/not-found-image.jpg';

interface EventCardProps {
  data: Event;
}

export const EventCard = ({ data }: EventCardProps) => {
  const date = new Date(data.date);
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      rounded='lg'
      overflow='hidden'
      style={{
        border: 'solid 1px #f1f1f1',
        margin: '10px 0',
        background: '#fff',
      }}
      data-testid={`event-card`}
    >
      <Image
        src={data.image ? data.image : NotFoundImage}
        alt={data.title}
        width='100%'
      />

      <Box p='6'>
        <Box mt='1' fontWeight='semibold' as='h3' lineHeight='tight'>
          {data.title}
        </Box>

        <Box fontWeight='medium' as='h4' lineHeight='tight'>
          {`${months[date.getMonth()]} ${date.getDate()}${getOrdinalNumber(
            date.getDate()
          )}, ${date.getFullYear()}`}
        </Box>
        <Box
          fontWeight='light'
          lineHeight='tight'
          data-testid='event-card-location'
        >
          {data.location ? data.location : 'Online event'}
        </Box>
        <Box
          fontWeight='thin'
          lineHeight='tight'
          style={{
            margin: '15px 0 0',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span style={{ width: '80%' }}>For registration and more info</span>
          <div style={{ width: '20%', textAlign: 'right' }}>
            <a
              style={{ textDecoration: 'none' }}
              href={data.link}
              target='_black'
              rel='noopener noreferrer'
            >
              <Image
                src={
                  data.image !== null && data.image.includes('meetup')
                    ? MeetupLogo
                    : EventbriteLogo
                }
                alt={
                  data.image !== null && data.image.includes('meetup')
                    ? 'Meetup Logo'
                    : 'Eventbrite Logo'
                }
                width='50%'
              />
            </a>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
