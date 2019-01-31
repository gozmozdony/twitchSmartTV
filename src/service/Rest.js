import axios from 'axios';
import TwitchGetStream from 'twitch-get-stream';
export var SERVER_API = process.env.__API__;
export var SERVER_CLIENTID = process.env.__CLIENTID__;
export var SERVER_ACCEPT = process.env.__ACCEPT__;
export var SERVER_KRAKEN = process.env.__KRAKEN__;
var Rest = /** @class */ (function () {
    function Rest() {
        this.twitch = TwitchGetStream(process.env.__CLIENTID__);
    }
    Rest.prototype.get = function (resource, query) {
        return axios.request({
            url: "" + SERVER_KRAKEN + resource + (query ? query : ''),
            headers: {
                'Accept': SERVER_ACCEPT,
                'Client-ID': SERVER_CLIENTID
            }
        });
    };
    Rest.prototype.resolveStreamUrl = function (channel) {
        return axios.get(SERVER_API + "?channel=" + channel);
    };
    return Rest;
}());
export { Rest };
//# sourceMappingURL=Rest.js.map