import { sharedOne } from '@beta4/shared/one';

export function sharedTwo(): string {
  console.log('I am in sharedTwo');
  console.log('The message from sharedOne is:', sharedOne());
  return `I am sharedTwo and I combine ${sharedOne()} and shared-two`;
}
