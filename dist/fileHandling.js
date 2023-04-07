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
var fs_1 = require("fs");
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs_2 = __importDefault(require("fs"));
var FileHandling = /** @class */ (function () {
    function FileHandling() {
    }
    //Get the resized image path
    FileHandling.imagePath = function (fileName, width, height) {
        return __awaiter(this, void 0, void 0, function () {
            var outPath;
            return __generator(this, function (_a) {
                if (fileName && width && height) {
                    outPath =
                        FileHandling.thumbPath +
                            path_1.default.sep +
                            fileName +
                            '_w_' +
                            width +
                            '_h_' +
                            height +
                            '.jpg';
                }
                else if (fileName && width) {
                    outPath =
                        FileHandling.thumbPath + path_1.default.sep + fileName + '_w_' + width + '.jpg';
                }
                else if (fileName && height) {
                    outPath =
                        FileHandling.thumbPath + path_1.default.sep + fileName + '_h_' + height + '.jpg';
                }
                else {
                    outPath = FileHandling.thumbPath + path_1.default.sep + fileName + '.jpg';
                }
                return [2 /*return*/, outPath];
            });
        });
    };
    //Get the full directory files names
    FileHandling.getFullImages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileNames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileNames = '';
                        return [4 /*yield*/, fs_2.default.readdirSync(FileHandling.fullPath).forEach(function (file) {
                                try {
                                    file = file.substring(0, file.lastIndexOf('.jpg'));
                                    fileNames = fileNames + file + ' - ';
                                }
                                catch (_a) {
                                    fileNames = "Couldn't get any files.   ";
                                }
                            })];
                    case 1:
                        _a.sent();
                        fileNames = fileNames.substring(0, fileNames.length - 3);
                        return [2 /*return*/, fileNames];
                }
            });
        });
    };
    //Check if the Thumb directory exist
    FileHandling.checkThumb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (fs_2.default.existsSync(FileHandling.thumbPath)) {
                    console.log('Directory exists!');
                }
                else {
                    fs_1.promises.mkdir(FileHandling.thumbPath);
                }
                return [2 /*return*/];
            });
        });
    };
    //Get the resized image
    FileHandling.resizeImage = function (fileDir, width, height, imageThumbPath) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        if (!(width && height)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, sharp_1.default)(fileDir).resize(width, height).toFile(imageThumbPath)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        if (!width) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, sharp_1.default)(fileDir).resize({ width: width }).toFile(imageThumbPath)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!height) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0, sharp_1.default)(fileDir).resize({ height: height }).toFile(imageThumbPath)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, (0, sharp_1.default)(fileDir).toFile(imageThumbPath)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, imageThumbPath];
                    case 9:
                        err_1 = _a.sent();
                        return [2 /*return*/, ''];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    FileHandling.thumbPath = path_1.default.resolve(__dirname, '../assets/thumb');
    FileHandling.fullPath = path_1.default.resolve(__dirname, '../assets/full');
    return FileHandling;
}());
exports.default = FileHandling;
