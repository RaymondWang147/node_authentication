# node-auth

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
  -d '{ "email": "Raymond@gmail.com", "name": "Raymond", "password": "abcd1234", "passwordConfirmation": "abcd1234"}'
```
