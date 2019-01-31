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
import { Channel } from '../models/Channel';
import { Rest } from '../../../service/Rest';
var ChannelService = /** @class */ (function (_super) {
    __extends(ChannelService, _super);
    function ChannelService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.channelSearch = '/search/channels?query=';
        _this.type = 'channel';
        return _this;
    }
    ChannelService.prototype.search = function (query) {
        return this.get(this.channelSearch, query);
    };
    ChannelService.prototype.map = function (result) {
        if (!!result.data.channels) {
            return result.data.channels.map(function (element) {
                return new Channel(element);
            });
        }
        return [];
    };
    return ChannelService;
}(Rest));
export { ChannelService };
//# sourceMappingURL=channel.js.map