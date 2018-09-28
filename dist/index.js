"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_1 = require("./lib/credentials");
exports.Credentials = credentials_1.Credentials;
const appletv_1 = require("./lib/appletv");
exports.AppleTV = appletv_1.AppleTV;
const now_playing_info_1 = require("./lib/now-playing-info");
exports.NowPlayingInfo = now_playing_info_1.NowPlayingInfo;
const message_1 = require("./lib/message");
exports.Message = message_1.Message;
const supported_command_1 = require("./lib/supported-command");
exports.SupportedCommand = supported_command_1.SupportedCommand;
/**
* A convenience function to parse a credentials string into a Credentials object.
* @param text  The credentials string.
* @returns A credentials object.
*/
function parseCredentials(text) {
    return credentials_1.Credentials.parse(text);
}
exports.parseCredentials = parseCredentials;
