import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { Layout } from "./components/commons/Layout";
import { EventsList } from "./components/EventsList";
import { Event } from "./models/event.interface";
import { Title } from "./components/commons/Title";

export const App = () => {
  const [data, setData] = React.useState(Array<Event>());
  const [list, setList] = React.useState(Array<Event>());
  const [isFetching, setIsFetching] = React.useState(false);

  const fetchMoreItems = React.useCallback(() => {
    setList((prevState: Array<Event>) => [
      ...prevState,
      ...data.slice(list.length, list.length + 10)
    ]);
    setIsFetching(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchMoreItems();
  }, [isFetching, fetchMoreItems]);

  React.useEffect(() => {
    fetch('https://events-scraper.s3.amazonaws.com/events.json', {
      method: "GET"
    }).then(res => res.json())
      .then((response: Array<Event>) => {
        const data = response.sort(
          (p, n) => new Date(p.date).getTime() - new Date(n.date).getTime());
        setData(data);
        setList(data.slice(0, 10));
      })
      .catch(error => console.log(error));
  }, []);

  function handleScroll(): void {
    const element: HTMLElement | null = document.documentElement;
    if (window.innerHeight + element!.scrollTop !== element!.offsetHeight ||
      isFetching ||
      list.length >= data.length) {
      return;
    }
    setIsFetching(true);
  }

  return (
    <Layout>
      <Title />
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {list === null ? <></> : <EventsList events={list} />}
        {isFetching && "Fetching more list items..."}
      </SimpleGrid>
    </Layout>
  );
};
