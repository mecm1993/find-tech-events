import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Event } from '../models/event.interface';
import { EventCard } from '../components/EventCard';

describe('<EventCard />', () => {
  const eventMock: Event = {
    title: 'MonkeyFest',
    description: '',
    location: '',
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F105637154%2F216165668189%2F1%2Foriginal.20200708-145214?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=172374df8bcb7bb264663da4f8305ceb',
    date: new Date('2020-11-21T05:00:00.000Z'),
    link: 'https://www.eventbrite.com/e/monkeyfest-tickets-95313783091',
  };
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<EventCard data={eventMock} />);
  });

  it('Should render without errors', () => {
    const { getByTestId } = wrapper;
    const eventCard = getByTestId('event-card');
    expect(eventCard).toBeDefined();
  });

  it('Should match the data with fields', () => {
    const { getByTestId } = wrapper;
    const eventCard = getByTestId('event-card');
    const eventCardImg: HTMLImageElement | null = eventCard.querySelector(
      'img'
    );
    const eventCardTitle: HTMLHeadingElement | null = eventCard.querySelector(
      'h3'
    );

    const eventCardDate: HTMLHeadingElement | null = eventCard.querySelector(
      'h4'
    );

    const eventCardLocation: HTMLElement | null = getByTestId(
      'event-card-location'
    );

    const eventCardLink: HTMLLinkElement = eventCard.querySelector('a');

    expect(eventCardImg?.alt).toBe(eventMock.title);
    expect(eventCardTitle?.innerHTML).toBe(eventMock.title);
    expect(eventCardDate?.innerHTML).toBe('November 21st, 2020');
    expect(eventCardLocation?.innerHTML).toBe('Online event');
    expect(eventCardLink?.href).toBe(eventMock.link);
  });
});
