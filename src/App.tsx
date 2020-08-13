import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { Layout } from "./components/commons/Layout";
import { EventsList } from "./components/EventsList";
import { Event } from "./models/event.interface";
import { Title } from "./components/commons/Title";


export const App = () => {
  const [data, setData] = React.useState(Array<Event>());
  const [listItems, setListItems] = React.useState(Array<Event>());
  const [isFetching, setIsFetching] = React.useState(false);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // React.useEffect(() => {
  //   if (!isFetching) return;
  //   fetchMoreListItems();
  // }, [isFetching]);

  // function handleScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight ||
  //     isFetching
  //   )
  //     return;
  //   setIsFetching(true);
  // }

  // function fetchMoreListItems() {
  //   setTimeout(() => {
  //     setListItems((prevState: any) => [
  //       ...prevState,
  //       ...data.slice(listItems.length, listItems.length + 10)
  //     ]);
  //     setIsFetching(false);
  //   }, 2000);
  // }

  React.useEffect(() => {
    fetch(
      `https://events-scraper.s3.amazonaws.com/events.json`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then((response: Array<Event>) => {
        const _response = response.sort((p, n) => new Date(p.date).getTime() - new Date(n.date).getTime());
        setData(_response);
        setListItems(_response.slice(0, 10));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Layout>
      <Title />
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {listItems === null ? <></> : <EventsList events={listItems} />}
        {isFetching && "Fetching more list items..."}
      </SimpleGrid>
    </Layout>
  );
};
