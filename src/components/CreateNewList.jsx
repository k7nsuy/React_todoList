import { useState, useRef } from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <>
      <input name="username" value={username} onChange={onChange} />
      <input name="email" value={email} onChange={onChange} />
      <button onClick={onCreate}>Create User</button>
    </>
  );
}

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>Remove</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onRemove={onRemove} />
      ))}
    </div>
  );
}

export function CreateNewList() {
  const inputReset = {
    username: "",
    email: "",
  };
  const [inputs, onInputs] = useState(inputReset);

  function onChange(e) {
    const { name, value } = e.target;

    onInputs({
      ...inputs,
      [name]: value,
    });
  }

  function onRemove(id) {
    setOurUsers(users.filter((user) => user.id !== id));
  }

  const { username, email } = inputs;

  const ourUsers = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  const [users, setOurUsers] = useState(ourUsers);

  const nextId = useRef(users.length + 1);

  function onCreate() {
    const user = {
      id: nextId.current,
      username: username,
      email: email,
    };
    setOurUsers([...users, user]);
    onInputs(inputReset);
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}
