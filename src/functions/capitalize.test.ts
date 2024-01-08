import capitalize from '@/functions/capitalize';

describe('capitalize', () => {
  it('should return string where the first letter is uppercase', () => {
    const str = 'LES DEUX PARCS';
    const expected = 'Les deux parcs';

    const actual = capitalize(str);
    expect(actual).toStrictEqual(expected);
  });

  it('should return when str is null', () => {
    const expected = null;

    const actual = capitalize(null);
    expect(actual).toStrictEqual(expected);
  });
});
