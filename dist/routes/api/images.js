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
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var fileHandling_1 = __importDefault(require("./../../fileHandling"));
var images = express_1.default.Router();
images.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, width, height, errResult, sentFileResult, w, h, value, fileDir, imageThumbPath, value;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileName = req.query.filename;
                width = req.query.width;
                height = req.query.height;
                errResult = '';
                sentFileResult = '';
                w = 0;
                h = 0;
                if (!(fileName == null || fileName == 'undefined')) return [3 /*break*/, 2];
                return [4 /*yield*/, fileHandling_1.default.getFullImages()];
            case 1:
                value = _a.sent();
                errResult =
                    "The file name parameter (?filename=) wasn't provided. Please add one of these files' names: " +
                        value;
                return [3 /*break*/, 9];
            case 2:
                fileDir = './assets/full/' + fileName + '.jpg';
                return [4 /*yield*/, fileHandling_1.default.imagePath(fileName, width, height)];
            case 3:
                imageThumbPath = _a.sent();
                if (!fs_1.default.existsSync(fileDir)) return [3 /*break*/, 7];
                //Check if the provided width and height are positive
                if (width != null && width != 'undefined') {
                    w = Number(width);
                    if (Number.isNaN(w) || w < 1) {
                        errResult =
                            "The width parameter isn't a positive value. Please provide a positive value and try again.";
                    }
                }
                if (height != null && height != 'undefined') {
                    h = Number(height);
                    if (Number.isNaN(h) || h < 1) {
                        errResult =
                            "The height parameter isn't a positive value. Please provide a positive value and try again.";
                    }
                }
                if (!!errResult) return [3 /*break*/, 6];
                if (!fs_1.default.existsSync(imageThumbPath)) return [3 /*break*/, 4];
                sentFileResult = imageThumbPath;
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, fileHandling_1.default.resizeImage(fileDir, w, h, imageThumbPath)];
            case 5:
                sentFileResult = _a.sent();
                _a.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, fileHandling_1.default.getFullImages()];
            case 8:
                value = _a.sent();
                errResult = "The file doesn't exists. Available file names are: " + value;
                _a.label = 9;
            case 9:
                if (errResult) {
                    res.send(errResult);
                }
                else if (sentFileResult) {
                    res.sendFile(sentFileResult);
                }
                return [2 /*return*/];
        }
    });
}); });
exports.default = images;
