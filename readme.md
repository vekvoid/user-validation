# Users validation

## Usage

**Installation:**
```
npm install
```
```
docker-compose up -d
```

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
