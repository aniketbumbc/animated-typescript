import React, { ChangeEvent } from 'react';

const EventCom = () => {
  const onchangeFun = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <h3> Events </h3>
      <input onChange={onchangeFun} />
    </div>
  );
};

export default EventCom;
