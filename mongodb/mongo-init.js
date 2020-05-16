db.createUser(
    {
        user: "istyle",
        pwd: "tko7510",
        roles: [
            {
                role: "readWrite",
                db: "devdb"
            }
        ]
    }
);