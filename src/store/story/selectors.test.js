import { hasMoreStoriesSelector } from './selectors';

test('selector unit test', () => {
    expect(hasMoreStoriesSelector([1, 2, 3], [1, 2])).toBe(true);
    expect(hasMoreStoriesSelector({ a: 2, b: 3 }), { c: 4, d: 9 });
});
