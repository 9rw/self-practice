export default function checkEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return "Email is required";
  } else if (!emailRegex.test(email)) {
    return "Invalid email";
  }

  return "Pass"
}
