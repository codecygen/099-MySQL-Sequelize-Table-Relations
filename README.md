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

- ## One-to-One-Relation <br>

    **hasOne** and **belongsTo** will be on 2 models 
    - **User** 
    - **UserPass**

        Here are the keywords for related associations.
        - **Model-Association-for-hasOne-method**
            - **hasOne** association and related utility methods such as **set+UserPass**, **get+UserPass**, and  **create+UserPass** are covered.
            - **onDelete: "CASCADE"**, **onUpdate: "CASCADE** are covered.
            - Difference in between hasOne and belongsTo is covered when a foreignKey is updated. (Keyword: **hasOne-belongsTo-Difference-On-ForeignKeys**)
        - **Model-Association-for-belongsTo-method**
            - **belongsTo** association and related utility methods such as **setUser**, **getUser**, and **create+User** are covered.
            - **onDelete: "CASCADE"**, **onUpdate: "CASCADE** are covered.
            - Difference in between hasOne and belongsTo is covered when a foreignKey is updated. (Keyword: **hasOne-belongsTo-Difference-On-ForeignKeys**)

- ## One-to-Many-Relation <br>

    **hasMany** and **belongsTo** will be on 2 models 
    - **User** 
    - **UserPost**

        Here are the keywords for related associations.
        - **Model-Association-for-hasMany-method-for-One-to-Many-Relation**
            - **hasMany** association and related utility methods such as **add+UserPost+s**, **count+UserPost+s**, and **remove+UserPost** are covered.
            - Same methods of **hasOne** is also available for **hasMany**. These utility methods are mentioned as **set+UserPass**, **get+UserPass**, and  **create+UserPass**.
        - **Model-Association-for-belongsTo-method-for-One-to-Many-Relation**


- ## Many-to-Many-Relation <br>
    Keep in mind that, for many to many relations, an intermediary table is needed which is called "join table". Here is an example for many to many relation tables for User, UserItem and intermediary table.

    ![ManyToManyImage](./readme-pictures/manyToMany.png)

    **belongsToMany** associations will be on 3 models
    - **User** 
    - **UserItem**
    - **UsersAndItems**, "Join Table" or intermediary table

        Here are the keywords for related associations.
        - **Model-Association-for-belongsToMany-method**
            - - **belongsToMany** association and related utility methods such as **add+UserItem+s**, **count+UserItem+s**, and **remove+UserItem** are covered. <br>
        **onDelete: "CASCADE"**, **onUpdate: "CASCADE** are covered. In many to many relations, you don't need to specify them openly in belongsToMany relations. The "join table" will automatically delete all common data.

    