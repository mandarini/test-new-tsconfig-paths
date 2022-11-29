import { sharedOne } from './shared-one';

describe('sharedOne', () => {
  it('should work', () => {
    expect(sharedOne()).toEqual('shared-one');
  });
});
