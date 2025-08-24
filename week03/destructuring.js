// Data users
import checkEmail from "./checkEmail.js";
let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "inactive",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "inactive",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "moderator",
    status: "active",
  },
];

// ฟังก์ชันสำหรับแสดงข้อมูลผู้ใช้ (Show User Details)
function showUserDetails(userId) {
  const user = users.find((user) => user.id === userId);

  if (!user) return null;

  const { name, email, role, status } = user;

  return `Name: ${name}, Email: ${email}, Role: ${role}, Status: ${status}`;
}

// console.log(showUserDetails(1));
// console.log(showUserDetails(4));

// ฟังก์ชันสำหรับเพิ่มผู้ใช้ (Add User)
function addUser({ name, email, role = "user", status = "inactive" }) {
  const isDupEmail = users.find((user) => user.email === email);
  let errorLogs = [];
  if (isDupEmail) errorLogs.push("This email is already in use");

  if (!name) errorLogs.push("Name is required");
  if (checkEmail(email) !== "Pass") errorLogs.push(checkEmail(email))

  if (errorLogs.length > 0) return {success: false, log: errorLogs};
  let newUser = {
    id: users.length + 1,
    name: name,
    email: email,
    role: role,
    status: status,
  };
  users.push(newUser);
  return { success: true, user: newUser };
}

// console.log(addUser({ name: "Satit Akkeeroj", email: "std047int2151@email.com" }));
// console.log(addUser({ name: "", email: "std047int151@email.com" }));
// console.log(addUser({}));
// console.log(addUser({ email: "std047int151email.com" }));

// ฟังก์ชันสำหรับแก้ไขข้อมูลผู้ใช้ (Edit User)
// โดย userId
function editUser(userId, { name, email, role, status }) {
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) return {success: false, log: ["User not found"]};
  let errorLogs = [];
  
  const user = users[userIndex];

  const emailValidation = checkEmail(email);
  if (emailValidation !== "Pass") errorLogs.push(emailValidation);

  if (!name) errorLogs.push("Name is required");

  if (!["active", "inactive"].includes(status)) {
    errorLogs.push("Status must be 'active' or 'inactive'");
  }

  if (errorLogs.length > 0) return {success: false, log: errorLogs};
  user.name = name;
  user.email = email;
  user.role = role || user.role;
  user.status = status || user.status;
  
  return {success: true, user: user};
}
// console.log(editUser(1, {name: "riw", email: "as@a.com", status: "active"}))

// ฟังก์ชันสำหรับลบผู้ใช้ (Delete User)
function deleteUser(userId) {
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) return {success: false, log: ["User not found"]};

  users.splice(userIndex, 1);
  return {success: true, log: `User with ID ${userId} has been deleted`};
}
// console.log(deleteUser(0))
// console.log(deleteUser(1))
// console.log(showUserDetails(1))

// ฟังก์ชันสำหรับค้นหาผู้ใช้ (Search User)
function searchUser(query) {
  const results = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) return "No users found";
  return results;
}
// console.log(searchUser("riw"))
// console.log(editUser(1, {name: "riw", email: "as@a.com", status: "active"}))
// console.log(searchUser("riw"))