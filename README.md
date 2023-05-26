# Sequelize in MySQL (hasOne, hasMany, belongsTo, belongsToMany)

- This is a project which utilizes sequelize in NodeJS to interact with MySQL.
- ".env" file is created for the project. The content is given down below.
- hasOne, hasMany, belongsTo, belongsToMany table relations are covered here.

```javascript
DB = "mysql";
SCHEMA = "website";
ADMIN = "root";
PASS = "NEWPASSWORD";
HOST = "localhost";
PORT = 3306;
```

# Table Associations and Keywords

Associations are set for tables. All tables are given down below.

- **hasOne** and **belongsTo** associations for 2 models
    - **User**
    - **UserPass**

    Here are the keywords for related associations.
    - **Model-Association-for-hasOne-method** <br>
        **hasOne** association and related **set+UserPass**, **get+UserPass**, and  **create+UserPass** are covered. <br>
        **onDelete: "CASCADE"**, **onUpdate: "CASCADE** are covered. <br>
        Difference in between hasOne and belongsTo is covered when a foreignKey is updated. **hasOne-belongsTo-Difference-On-ForeignKeys**
    - **Model-Association-for-belongsTo-method** <br>
        **belongsTo** association and related **setUser**, **getUser**, and **create+User** are covered. <br>
        **onDelete: "CASCADE"**, **onUpdate: "CASCADE** are covered. <br>
        Difference in between hasOne and belongsTo is covered when a foreignKey is updated. **hasOne-belongsTo-Difference-On-ForeignKeys**
