const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance2 = require('./config/c_2.json');
const questionnaireSchema =
  require('./questionnaireSchema').questionnaireSchema;

// test('questionnaire 正确测试1', () => {
//   expect(v.validate(instance2, questionnaireSchema).errors.length > 0).toBe(
//     true
//   );
// });

test('questionnaire 错误测试1', () => {
  expect(v.validate(instance2, questionnaireSchema).errors.length > 0).toBe(
    true
  );
});

console.log(v.validate(instance2, questionnaireSchema));