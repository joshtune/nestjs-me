module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "user",
  "password": "password",
  "database": "me",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true,
  "seeds": ["dist/database/seeds/**/*.seed{.ts,.js}"],
  "factories": [
    "dist/database/factories/**/*.factory{.ts,.js}"
  ]
};
