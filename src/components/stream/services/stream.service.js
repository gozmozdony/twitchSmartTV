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
import { Rest } from '../../../service/Rest';
import { Stream } from '../models/stream';
var StreamService = /** @class */ (function (_super) {
    __extends(StreamService, _super);
    function StreamService() {
        var _this = _super.call(this) || this;
        _this.featuredString = '/streams/featured';
        _this.streamSearch = '/search/streams?query=';
        _this.type = 'stream';
        return _this;
    }
    StreamService.prototype.featured = function () {
        return this.get(this.featuredString);
    };
    StreamService.prototype.search = function (query) {
        if (!query) {
            return this.featured();
        }
        return this.get(this.streamSearch, query);
    };
    StreamService.prototype.map = function (result) {
        if (!!result.data.streams) {
            return result.data.streams.map(function (element) {
                return new Stream(element);
            });
        }
        if (!!result.data.featured) {
            return result.data.featured.map(function (element) {
                return new Stream(element.stream);
            });
        }
        return [];
    };
    return StreamService;
}(Rest));
export { StreamService };
//# sourceMappingURL=stream.service.js.map