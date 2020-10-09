import React from 'react';
import { Box, Stack } from '@chakra-ui/core';
import { EventCard } from './EventCard';
import { Event } from '../models/event.interface';

interface EventsListProps {
  events: Array<Event>;
}

export const EventsList = ({ events }: EventsListProps) => {
  return (
    <>
      {events.map((p: Event) => (
        <Box key={p.title} w='100%' data-testid='event-col'>
          <Stack style={{ alignItems: 'center' }}>
            <EventCard data={p} />
          </Stack>
        </Box>
      ))}
    </>
  );
};
