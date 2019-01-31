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
import { Channel } from '../../channel/models/Channel';
var Stream = /** @class */ (function (_super) {
    __extends(Stream, _super);
    function Stream(data) {
        var _this = _super.call(this) || this;
        try {
            _this.id = data._id;
            _this.avarage_fps = data.avarage_fps;
            _this.channel = new Channel(data.channel);
            _this.created_at = data.created_at;
            _this.delay = data.delay;
            _this.game = data.game === '' ? 'IRL' : data.game;
            _this.is_playlist = data.is_playlist;
            _this.preview = new Image(data.preview);
            _this.video_height = data.video_height;
            _this.viewers = data.viewers;
        }
        catch (e) {
            console.error(e);
        }
        return _this;
    }
    return Stream;
}(Default));
export { Stream };
//# sourceMappingURL=stream.js.map