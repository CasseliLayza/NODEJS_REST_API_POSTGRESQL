import { pool } from "../db.js";

export const createtUsers = async (req, res) => {
  const request = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO USERS (NAME, EMAIL) VALUES ($1, $2) RETURNING *",
      [request.name, request.email]
    );

    console.log("User created", rows[0]);
    res.json({ message: "User created", user: rows[0] });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Email ya existe" });
    }

    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM USERS");
  console.log(rows);
  res.json(rows);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM USERS WHERE ID = $1", [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(rows[0]);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const request = req.body;
  const { rows, rowCount } = await pool.query(
    "UPDATE USERS SET NAME = $1, EMAIL=$2 WHERE ID = $3 RETURNING *",
    [request.name, request.email, id]
  );

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User updated ", user: rows[0] });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { rowCount, rows } = await pool.query(
    "DELETE FROM USERS WHERE ID = $1 RETURNING *",
    [id]
  );

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User deleted", user: rows[0] });
  // res.sendStatus(204);
};
