# Sequelize in MySQL (hasOne, hasMany, belongsTo, belongsToMany)
- This is a project which utilizes sequelize in NodeJS to interact with MySQL.
- ".env" file is created for the project. The content is given down below.
- hasOne, hasMany, belongsTo, belongsToMany table relations are covered here.

```javascript
DB="mysql"
SCHEMA="website"
ADMIN="root"
PASS="NEWPASSWORD"
HOST="localhost"
PORT=3306
```

# Table Associations and Keywords
Associations are set for tables. All tables are given down below.
- 
    - **Model-Association-for-hasOne-method** <br>
    **hasOne** association and related **setUserPass** and **getUserPass**, **createUserPass** are covered.
    - **Model-Association-for-belongsTo-method** <br>
        - User
        - UserPass