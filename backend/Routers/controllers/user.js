const { user } = require("../routes/data");
const getAllUser = (req, res) => {
  console.log("All users");
  res.send(user);
};
const getUser = (req, res) => {
  console.log(typeof user);
  console.log(req.params.id);

  const foundUser = user.find(({ id }) => id === parseInt(req.params.id));
  const result = user.find(({ id }) => id === parseInt(req.params.id));
  console.log(result);
  console.log(foundUser);

  if (foundUser) {
    res.send(foundUser);
    return;
  }
  res.status(404).send("user not found");
};
const addNewUser = (req, res) => {
  console.log(req.body);

  const addedUser = {
    id: user.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    city: req.body.city,
    bloodGroup: req.body.bloodGroup,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
  };
  user.push(addedUser);
  res.status(201).send(addedUser);
};

const loginUser = (req, res) => {
  //check user name and password
  console.log(req.body);

  const result = user.find(
    ({ email, Password }) =>
      email === req.body.email && Password === req.body.password
  );

  if (result) res.send(result);
  else res.send("User not found");
};

const updateUser = (req, res) => {
  const userId = req.query.id;
  user.forEach((elem, i) => {
    if (i == userId) {
      elem.id = req.body.id;
      elem.firstName = req.body.firstName;
      elem.lastName = req.body.lastName;
      elem.email = req.body.email;
      elem.age = req.body.age;
      elem.city = req.body.city;
      elem.bloodGroup = req.body.bloodGroup;
      elem.phoneNumber = req.body.phoneNumber;
    }
  });
};

const getBloodTypePeople = (req, res) => {
  console.log(req.body.bloodGroup);

  const result = user.filter(({ bloodGroup }) => {
    return (
      bloodGroup.toLocaleLowerCase() === req.body.bloodGroup.toLocaleLowerCase()
    );
  });
  console.log(result);
  if (result) res.send(result);
  else res.send("No person with this Blood Group not found");
};

module.exports = {
  getAllUser,
  getUser,
  updateUser,
  addNewUser,
  loginUser,
  getBloodTypePeople,
};
