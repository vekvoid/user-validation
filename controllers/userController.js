const user = require('../models/user');

function extractFirstReg(results) {
  let resultJson = JSON.stringify(results);

  if (results.length > 0) {
    [resultJson] = JSON.parse(resultJson);
  } else {
    resultJson = {};
  }

  return resultJson;
}

function generateJsonResponse(error, config) {
  const apiResultObject = { meta: { error: '' }, data: { found: false, msg: '' } };
  const text = config.msgs;

  if (error) {
    apiResultObject.meta.error = error;
  } else if (config.validation()) {
    apiResultObject.data.found = true;
    apiResultObject.data.msg = text.ok;
  } else {
    apiResultObject.data.found = false;
    apiResultObject.data.msg = text.fail;
  }

  return apiResultObject;
}

function jsonConfig(validation, messages) {
  const msgsObject = messages || { ok: 'Ok.', fail: 'Fail.' };
  const validationResult = validation;

  const config = {
    msgs: msgsObject,
    validation: () => validationResult,
  };

  return config;
}

function setupFinalJson(config) {
  const {
    error,
    validationResult,
    msgsObject,
  } = config;

  const jsonConfigObject = jsonConfig(validationResult, msgsObject);
  const apiResult = generateJsonResponse(error, jsonConfigObject);

  return apiResult;
}

const UserController = {
  validateUsername: (req, res) => {
    const { username } = req.body;

    user.getUserByUsername(username, (error, results) => {
      const validationResult = results.length > 0;
      const resultJson = extractFirstReg(results);
      const msgsObject = {
        ok: `User ${resultJson.username} exists.`,
        fail: 'User not found.',
      };

      const apiFinalObject = setupFinalJson({
        error,
        results,
        validationResult,
        msgsObject,
      });

      res.json(apiFinalObject);
    });
  },
  validateUserPassword: (req, res) => {
    const { username, password } = req.body;

    user.getUserByUsernamePassword(username, password, (error, results) => {
      const validationResult = results.length > 0;
      const msgsObject = {
        ok: 'Correct user/password.',
        fail: 'Incorrect user/password.',
      };

      const apiFinalObject = setupFinalJson({
        error,
        results,
        validationResult,
        msgsObject,
      });

      res.json(apiFinalObject);
    });
  },
};

module.exports = UserController;
