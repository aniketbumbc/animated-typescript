import React, { useState, useRef, useEffect } from 'react';

interface User {
  name: string;
  age: number;
}

const users = [
  {
    name: 'Bunny',
    age: 20,
  },
  {
    name: 'Mike',
    age: 10,
  },
  {
    name: 'Kamal',
    age: 55,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const searchUser = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h3> User Search </h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={searchUser}>Find Users</button>
      <h5>
        {user && (
          <ul>
            <li>
              {user.name} {user.age}
            </li>
          </ul>
        )}
      </h5>
    </div>
  );
};

export default UserSearch;
