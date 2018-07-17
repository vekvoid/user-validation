# Users validation

## Usage

**Run:**
```
npm install
```
```
docker-compose up -d
```
Wait until the docker machines are configured in background.

**Test:**
```
npm test
```

## Endpoinst

### [POST] /v1/users/validateUsername
Return if the username exists or not.

**Parameters:**

Name|Values|Required
|---|------|--------|
|username|string|Yes|

**Response:**
```
{
    "meta": {
        "error": string
    },
    "data": {
        "found": boolean,
        "msg": string
    }
}
```

### [POST] /v1/users/validateUserPassword
Return if the username and password match.

**Parameters:**

Name|Values|Required
|---|------|--------|
|username|string|Yes|
|password|string|Yes|


**Response:**
```
{
    "meta": {
        "error": string
    },
    "data": {
        "found": boolean,
        "msg": string
    }
}
