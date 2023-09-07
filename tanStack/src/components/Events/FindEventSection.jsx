import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { fetchEvents } from '../utils/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTern, setSearchTerm] = useState();
  const {data, isLoading, isError, error} = useQuery({ queryKey: ['todos', {search: searchTern}], queryFn:()=> fetchEvents(searchTern), enabled:!searchTern })
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
    
  }

  let content;

  if (isLoading) {
    console.log("loading..")
    content = <LoadingIndicator />;
  }

  if (isError) {
    console.log("error..")
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message} />
    );
  }

  if (data) {
    console.log("data..", data)
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      <p>Please enter a search term and to find events.</p>
      {content}
    </section>
  );
}
