var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Game } from '../models/Game';
import { Rest } from '../../../service/Rest';
var GameService = /** @class */ (function (_super) {
    __extends(GameService, _super);
    function GameService() {
        var _this = _super.call(this) || this;
        _this.gameTop = '/games/top';
        _this.gameSearch = '/search/games?query=';
        _this.type = 'game';
        return _this;
    }
    GameService.prototype.top = function () {
        return this.get(this.gameTop);
    };
    GameService.prototype.search = function (query) {
        if (!query) {
            return this.top();
        }
        return this.get(this.gameSearch, query);
    };
    GameService.prototype.map = function (result) {
        if (!!result.data.games) {
            return result.data.games.map(function (element) {
                return new Game(element);
            });
        }
        if (!!result.data.top) {
            return result.data.top.map(function (element) {
                return new Game(element);
            });
        }
        return [];
    };
    return GameService;
}(Rest));
export { GameService };
//# sourceMappingURL=game.service.js.map