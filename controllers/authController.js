const users = require("../data/usersData");

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
};

module.exports = {
  registerUser,
  loginUser,
};
