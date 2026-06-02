app.post("/users", async (req, res) => {

    const { name, email } = req.body;

    await connection.execute(
        "INSERT INTO users(name,email) VALUES(?,?)",
        [name, email]
    );

    res.json({
        message: "User created"
    });
});

app.get("/users", async (req, res) => {

    const [rows] =
    await connection.execute(
        "SELECT * FROM users"
    );

    res.json(rows);
});

app.get("/users/:id", async (req, res) => {

    const [rows] =
    await connection.execute(
        "SELECT * FROM users WHERE id=?",
        [req.params.id]
    );

    res.json(rows[0]);
});

app.put("/users/:id", async (req, res) => {

    const { name, email } = req.body;

    await connection.execute(
        "UPDATE users SET name=?, email=? WHERE id=?",
        [name, email, req.params.id]
    );

    res.json({
        message: "Updated"
    });
});

app.delete("/users/:id", async (req, res) => {

    await connection.execute(
        "DELETE FROM users WHERE id=?",
        [req.params.id]
    );

    res.json({
        message: "Deleted"
    });
});