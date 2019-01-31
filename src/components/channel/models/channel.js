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
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel(data) {
        var _this = _super.call(this) || this;
        try {
            _this.id = data._id;
            _this.broadcaster_language = data.broadcaster_language;
            _this.created_at = data.created_at;
            _this.display_name = data.display_name;
            _this.followers = data.followers;
            _this.game = data.game;
            _this.language = data.language;
            _this.logo = data.logo;
            _this.mature = data.mature;
            _this.name = data.name;
            _this.partner = data.partner;
            _this.profile_banner = data.profile_banner;
            _this.profile_banner_background_color = data.profile_banner_background_color;
            _this.status = data.status;
            _this.url = data.url;
            _this.video_banner = data.video_banner;
            _this.views = data.views;
            _this.live = !!_this.video_banner;
        }
        catch (e) {
            console.error(e);
        }
        return _this;
    }
    return Channel;
}(Default));
export { Channel };
//# sourceMappingURL=channel.js.map