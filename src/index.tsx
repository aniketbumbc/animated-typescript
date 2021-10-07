import React from 'react';
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventCom from './Events/EventCom';

const App = () => {
  return (
    <div>
      <h1> Hello </h1>
      <GuestList />
      <UserSearch />
      <EventCom />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
