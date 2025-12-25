export default function handler(req, res) {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "123456") {
    return res.status(200).json({
      token: "fake-jwt-token",
      user: { email }
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
}