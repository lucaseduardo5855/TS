//Tipos
type VerifyUser = (user: User, sentValue: User) => boolean; //vai retornar true ou falso se bate no bd
type User = { username: string; password: number };

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Joao', password: 123 };
const user2 = { username: 'Lucas', password: 123 };
const loggedIn = verifyUser(bdUser, user2);
console.log(loggedIn);
