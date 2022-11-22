
# Nodemailer App
### Environment Variables
| Name | Description |
| --- | --- |
| MONGO_URL | MongoDB Url |
| PORT | Server Port |
| JWT_SECRET | JWT secret key for encryption and decryption of token |
| JWT_EXPIRY | JWT token expiry time |


### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | api/| Home page |
| POST | api/users/create | Create user |
| PATCH | api/users/update | Update user |
| DELETE | api/users/delete | Delete user |
| POST | api/login| Generate token |


#### Create User
`POST /users/create`: signup

`Body`: 
```
{
    "first_name": "aa", 
    "middle_name": "bb",
    "last_name": "cc",
    "email": "aa@example.com",
    "dob": "1999-10-11",
    "mobile_no": 9856524108,
    "occupation": "developer",
    "company": "xyz",
    "password": "your password",
}
```


#### Login
`POST /login`: Login

`Body`: 
```
{
    "email": "yourname@example.com",
    "password": "your password"
}
```

