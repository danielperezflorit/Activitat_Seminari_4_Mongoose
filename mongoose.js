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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
var filmSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    director: { type: String, required: true },
    length: { type: Number }
});
var videoclubSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    boss: { type: String, required: true },
    address: { type: String, required: true }
});
// 3. Create Models.
var Film = (0, mongoose_1.model)('Film', filmSchema);
var Videoclub = (0, mongoose_1.model)('Videoclub', videoclubSchema);
run().catch(function (err) { return console.log(err); });
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var films, deletedFilm, orden;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // 4. Connect to MongoDB
                return [4 /*yield*/, (0, mongoose_1.connect)('mongodb://localhost:27017')];
                case 1:
                    // 4. Connect to MongoDB
                    _a.sent();
                    return [4 /*yield*/, getFilms()];
                case 2:
                    films = _a.sent();
                    console.log('Films:', films);
                    return [4 /*yield*/, deleteFilm('6702fd363aac81372f7c49a1')];
                case 3:
                    deletedFilm = _a.sent();
                    console.log('Deleted Film:', deletedFilm);
                    return [4 /*yield*/, aggregateFilmsByDirector(95)];
                case 4:
                    orden = _a.sent();
                    console.log('Ordenado:', orden);
                    return [2 /*return*/];
            }
        });
    });
}
// Example of aggregation pipeline
//const aggregationResult = await aggregateFilmsByDirector(90);
//console.log('Aggregation Result:', aggregationResult);
//CREATE
function createFilm1(filmData) {
    return __awaiter(this, void 0, void 0, function () {
        var film;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    film = new Film(filmData);
                    return [4 /*yield*/, film.save()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createFilm2(filmData) {
    return __awaiter(this, void 0, void 0, function () {
        var film;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    film = new Film(filmData);
                    return [4 /*yield*/, film.save()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createVideoclub(videoclubData) {
    return __awaiter(this, void 0, void 0, function () {
        var videoclub;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    videoclub = new Videoclub(videoclubData);
                    return [4 /*yield*/, videoclub.save()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// READ: Get all films
function getFilms() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Film.find()];
                case 1: return [2 /*return*/, _a.sent()]; // Return all films
            }
        });
    });
}
// UPDATE: Update a film by NAME
function updateFilm(id, updateData) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Film.findByIdAndUpdate(id, updateData, { new: true })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// DELETE: Delete a film by Name
function deleteFilm(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Film.findByIdAndDelete(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// Aggregation Pipeline: Aggregate films by director
function aggregateFilmsByDirector(minLength) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Film.aggregate([
                        {
                            $match: { length: { $gte: minLength } }, // Filtra por longitud mínima
                        },
                        {
                            $group: {
                                _id: "$director", // Agrupa por director
                                totalFilms: { $sum: 1 }, // Cuenta el número total de películas
                                avgLength: { $avg: "$length" }, // Calcula la duración promedio de las películas
                            },
                        },
                        {
                            $sort: { totalFilms: -1 }, // Ordena por número de películas en orden descendente
                        },
                    ])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
