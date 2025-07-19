const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");

usersModule.addUser("Yuri");
usersModule.addUser("Naftali");
//usersModule.listUsers();
console.log(usersModule.users);
