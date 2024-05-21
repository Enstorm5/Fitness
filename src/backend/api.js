// This file simulates backend API logic.

const database = {
  users: [],
  trainers: [],
  bookings: [],
};

export const fetchUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(database.users);
    }, 500);
  });
};

export const saveUser = (user) => {
  return new Promise(resolve => {
    setTimeout(() => {
      database.users.push(user);
      resolve(user);
    }, 500);
  });
};

// More backend logic functions would go here.
