import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string[]>([]);

  const addGuests = (): void => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h2>GuestList</h2>
      <ul>
        {guests.map((ele) => (
          <li key={ele}>{ele}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuests}> Add Guest </button>
    </div>
  );
};

export default GuestList;
