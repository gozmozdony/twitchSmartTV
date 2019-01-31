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
import { Default } from '../../../models/Default';
import { Image } from '../../../models/Image';
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(data) {
        var _this = _super.call(this) || this;
        try {
            _this.id = data.game ? data.game._id : data._id;
            _this.channels = data.channels;
            _this.viewers = data.viewers;
            _this.box = new Image(data.game ? data.game.box : data.box);
            _this.logo = new Image(data.game ? data.game.logo : data.logo);
            _this.name = data.game ? data.game.name : data.name;
            _this.localized_name = data.game ? data.game.localized_name : data.localized_name;
        }
        catch (e) {
            console.error(e);
        }
        return _this;
    }
    return Game;
}(Default));
export { Game };
//# sourceMappingURL=game.js.map