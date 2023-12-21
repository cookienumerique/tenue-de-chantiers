import uniqueOptions from '@/functions/uniqueOptions';

describe('uniqueOption', () => {
  it('should return unique option', () => {
    const data = [
      { value: '1', label: 'label1' },
      { value: '2', label: 'label2' },
      { value: '1', label: 'label1' },
    ];

    const expected = [
      { value: '1', label: 'label1' },
      { value: '2', label: 'label2' },
    ];

    const actual = uniqueOptions(data);
    expect(actual).toStrictEqual(expected);
  });
});
