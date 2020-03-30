const { check} = require('express-validator');
exports.userValidationRules =[
    check('email').isEmail()
    .withMessage('Bitte prüf deine Email-Adresse'),
    check('firstName')
    .exists()
    .withMessage('Bitte Firstname ist ein Pflichtfeld'),
    check('password')
    .isLength({min: 10})
]