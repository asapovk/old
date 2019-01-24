"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var SignIn_1 = __importDefault(require("./SignIn"));
var SignUp_1 = __importDefault(require("./SignUp"));
var alert_1 = __importDefault(require("../../../utils/alert"));
var useLocalStorage_1 = __importDefault(require("../../../hooks/useLocalStorage"));
exports.default = (function (props) {
    var _a = useLocalStorage_1.default("LOGIN_PAGE_INDEX", "SIGNIN"), value = _a.value, setValue = _a.setValue;
    var _b = react_1.useState(false), pending = _b[0], setPending = _b[1];
    var localeLoginOrPasswordIncorrent = "Не верная пара логин/пароль";
    var localePasswordsNotMatch = "Пароли не совпадают";
    var localePasswordsNotMatchPattern = "Пароль не соответвуют требованиям";
    if (props.config && props.config.locale && props.config.locale.loginOrPasswordIncorrent) {
        localeLoginOrPasswordIncorrent = props.config.locale.loginOrPasswordIncorrent;
    }
    if (props.config && props.config.locale && props.config.locale.passwordsNotMatch) {
        localePasswordsNotMatch = props.config.locale.passwordsNotMatch;
    }
    if (props.config && props.config.locale && props.config.locale.passwordsNotMatchPattern) {
        localePasswordsNotMatchPattern = props.config.locale.passwordsNotMatchPattern;
    }
    /**
     * Авторизация
     */
    var onLogin = function (login, password) { return __awaiter(_this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setPending(true);
                    return [4 /*yield*/, props.onLogin(login, password)];
                case 1:
                    result = _a.sent();
                    if (!result.ok) {
                        throw new Error(result.message || localeLoginOrPasswordIncorrent);
                    }
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    alert_1.default({
                        title: "Ошибка входа",
                        text: error_1.message,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    setPending(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Регистрация
     */
    var onSignUp = function (login, password, password2) { return __awaiter(_this, void 0, void 0, function () {
        var result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!props.onRegister) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    if (password !== password2) {
                        throw new Error(localePasswordsNotMatch);
                    }
                    if (props.config && props.config.newPasswordsMinLength) {
                        if (password.length < props.config.newPasswordsMinLength) {
                            throw new Error(localePasswordsNotMatchPattern);
                        }
                    }
                    if (props.config && props.config.newPasswordsPattern) {
                        if (!props.config.newPasswordsPattern.test(password)) {
                            throw new Error(localePasswordsNotMatchPattern);
                        }
                    }
                    setPending(true);
                    return [4 /*yield*/, props.onRegister(login, password)];
                case 2:
                    result = _a.sent();
                    if (!result.ok) {
                        throw new Error(result.message || 'Ошибка регистрации');
                    }
                    return [2 /*return*/, true];
                case 3:
                    error_2 = _a.sent();
                    alert_1.default({
                        title: "Ошибка регистрации",
                        text: error_2.message,
                    });
                    return [2 /*return*/, false];
                case 4:
                    setPending(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var onVerify = function (login, password, code) { return __awaiter(_this, void 0, void 0, function () {
        var result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!props.onVerify) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    setPending(true);
                    return [4 /*yield*/, props.onVerify(login, password, code)];
                case 2:
                    result = _a.sent();
                    if (!result.ok) {
                        throw new Error(result.message || 'Ошибка регистрации');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_3 = _a.sent();
                    alert_1.default({
                        title: "Неверный код",
                        text: error_3.message,
                    });
                    return [3 /*break*/, 5];
                case 4:
                    setPending(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    if (value === "SIGNIN") {
        return react_1.default.createElement(SignIn_1.default, { allowSignUp: typeof props.onRegister === "function", onSignUp: function () { return setValue("SIGNUP"); }, onSubmit: onLogin, pending: pending });
    }
    if (value === "SIGNUP") {
        return react_1.default.createElement(SignUp_1.default, { onBack: function () { return setValue("SIGNIN"); }, newPasswordsMinLength: props.config && props.config.newPasswordsMinLength || 6, onSignUp: onSignUp, pending: pending, onVerify: onVerify });
    }
    return null;
});
