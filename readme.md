# digitalocean serverless function

*Powered by Leonardo Araújo*

For testing purposes and working documentation,
I created a serverless digitalocean function that connects to mongodb atlas and saves a uuid.
Simple example.

## Requirements

- [Doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)

## Instalation

For run `do-func` make following steps:

- Make download for this repository.
- copy `.env.example` to `.env` and put your credentials.
- Make auth with doctl and your digitalocean [auth](https://docs.digitalocean.com/reference/doctl/reference/auth/).
- Create your namespace `doctl serverless namespaces create <Name>`
- Connect with serverless namespace `doctl serverless connect`
- In the root, goto `cd packages/generator/uuid` and run `npm install --package-lock-only`
- Goto root directory again `cd ../../..`
- Run this command in root directory `doctl serverless deploy . --remote-build`
- Run this command for get url `doctl sbx fn get generator/uuid --url`
- Make request POST to url.

```sh
curl -X POST https://faas-lon1-917a94a7.doserverless.co/api/v1/web...
```

Output:

```json
{
  "success": "New uuid created successfully."
}
```

- Make request GET to url.

```sh
curl https://faas-lon1-917a94a7.doserverless.co/api/v1/web...
```

Output:

```json
{
  "data": [{
    "_id": "6346d496dc07ed2a1a967b5c",
    "uuidzzz": "8c416900-696b-4472-9398-074e9828359e"
  }]
}
```

Bonus

*- [Documentation](https://docs.digitalocean.com/tutorials/jamstack-series-part-2-add-serverless-functions-to-app/)*

