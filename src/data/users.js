
const users = [
  {
    email: "mash@gmail.com",
    password: "password"
  },
  {
    email: "pav@gmail.com",
    password: "password"
  },
  {
    email: "bob@gmail.com",
    password: "password"
  }
]

export const getUserByEmail = (email) => {
  const found = users.find(user => user.email === email)
  return found;
}