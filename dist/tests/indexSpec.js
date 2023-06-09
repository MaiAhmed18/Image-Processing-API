"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var fileHandling_1 = __importDefault(require("./../fileHandling"));
//Test the endpoints
var request = (0, supertest_1.default)(index_1.default);
describe('Test main endpoint responses', function () {
    it('gets the api endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test endpoint responses: /api/images', function () {
    it('gets /api/images?filename=palmtunnel', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=palmtunnel')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test endpoint responses: /api/images?filename=palmtunnel', function () {
    it('gets /api/images?filename=palmtunnel&width=300&height=200 with width and height', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=palmtunnel&width=300&height=200')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test with unexisted filename endpoint responses: /api/images?filename=test', function () {
    it('gets /api/images?filename=test', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=test')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test Invalid parameters endpoint responses: /api/images?filename=palmtunnel', function () {
    it('gets /api/images?filename=palmtunnel&width=-300&height=test', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images?filename=palmtunnel&width=-300&height=test')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test without params: /api/images?filename=palmtunnel', function () {
    it('gets /api/images', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/images')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
//Test Image processing function itself
describe('Test image processing via sharp', function () {
    it('raises the path of the resized image', function () { return __awaiter(void 0, void 0, void 0, function () {
        var path, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = fileHandling_1.default).resizeImage;
                    _c = ['./assets/full/palmtunnel.jpg',
                        100,
                        500];
                    return [4 /*yield*/, fileHandling_1.default.imagePath('palmtunnel', '100', '500')];
                case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
                case 2:
                    path = _d.sent();
                    expect(path).not.toEqual('');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Test image processing via sharp', function () {
    it('raises empty path (file does not exist)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var path, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = fileHandling_1.default).resizeImage;
                    _c = ['./assets/full/test.jpg',
                        100,
                        500];
                    return [4 /*yield*/, fileHandling_1.default.imagePath('test', '100', '500')];
                case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent()]))];
                case 2:
                    path = _d.sent();
                    expect(path).toEqual('');
                    return [2 /*return*/];
            }
        });
    }); });
});
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    var resizedImage1, resizedImage2, resizedImage3, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                resizedImage1 = path_1.default.resolve(fileHandling_1.default.thumbPath, 'palmtunnel_w_300_h_200.jpg');
                resizedImage2 = path_1.default.resolve(fileHandling_1.default.thumbPath, 'palmtunnel_w_100_h_500.jpg');
                resizedImage3 = path_1.default.resolve(fileHandling_1.default.thumbPath, 'palmtunnel.jpg');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, fs_1.promises.access(resizedImage1)];
            case 2:
                _b.sent();
                fs_1.promises.unlink(resizedImage1);
                return [4 /*yield*/, fs_1.promises.access(resizedImage2)];
            case 3:
                _b.sent();
                fs_1.promises.unlink(resizedImage2);
                return [4 /*yield*/, fs_1.promises.access(resizedImage3)];
            case 4:
                _b.sent();
                fs_1.promises.unlink(resizedImage3);
                return [3 /*break*/, 6];
            case 5:
                _a = _b.sent();
                console.log('');
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
