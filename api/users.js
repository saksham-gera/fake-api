import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/db.json");

export default function handler(req, res) {
  const db = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (req.method === "GET") {
    return res.status(200).json(db.users);
  }

  if (req.method === "POST") {
    const newUser = { id: Date.now(), ...req.body };
    db.users.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).json({ message: "Method Not Allowed" });
}