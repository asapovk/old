"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(validate, value) {
    var errors = [];
    if (validate) {
        validate.forEach(function (item) {
            if (item.regex.test(value) === Boolean(item.isMatch)) {
                errors.push(item.error || "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 '" + value + "' \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u0435\u0442 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044E " + item.regex);
            }
        });
    }
    return errors;
}
