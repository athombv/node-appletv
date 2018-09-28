import { Credentials } from './lib/credentials';
import { AppleTV } from './lib/appletv';
import { NowPlayingInfo } from './lib/now-playing-info';
import { Message } from './lib/message';
import { SupportedCommand } from './lib/supported-command';

/**
* A convenience function to parse a credentials string into a Credentials object.
* @param text  The credentials string.
* @returns A credentials object.
*/
export function parseCredentials(text: string): Credentials {
  return Credentials.parse(text);
}

export {
  AppleTV,
  NowPlayingInfo,
  Credentials,
  Message,
  SupportedCommand
};