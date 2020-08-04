import React from "react";
import { Box, Image } from "@chakra-ui/core";
import { Event } from "../models/event.interface";
import EventbriteLogo from "../assets/eventbrite-logo.png";
import MeetupLogo from "../assets/meetup-logo.png";
import { getOrdinalNumber, months} from "../utils/date";

interface EventCardProps {
  data: Event;
}

export const EventCard = ({ data }: EventCardProps) => {
  const date = new Date(data.date);
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" style={{border: 'solid 1px #f1f1f1',margin: '10px 0'}}>
      <Image src={data.image} alt={data.title} width="100%" />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
        >
          {data.title}
        </Box>

        <Box
          fontWeight="medium"
          as="h4"
          lineHeight="tight"
        >
          {`${months[date.getMonth()]} ${date.getDate()}${getOrdinalNumber(date.getDate())}, ${date.getFullYear()}`}
        </Box>
        <Box
          fontWeight="light"
          lineHeight="tight"
        >
          {data.location}
        </Box>
        <Box
          fontWeight="thin"
          lineHeight="tight"
          style={{textAlign: 'right', margin: '15px 0 0', display: 'flex', alignItems: 'center'}}
        >
          <span>
            For registration and more info
          </span>
          <a href={data.link} style={{textDecoration: 'none'}}>
            <Image
              src={data.image !== null && data.image.includes("meetup") ? MeetupLogo : EventbriteLogo}
              alt={data.image}
              width="10%"
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
