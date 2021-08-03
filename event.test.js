describe('Event and EventTarget', () => {
  it('exists', () => {
    // Failing with 'undefined' in Node 15.4+ including 16+.
    expect(typeof Event).toBe('object');
    expect(typeof EventTarget).toBe('object');
  });
});
