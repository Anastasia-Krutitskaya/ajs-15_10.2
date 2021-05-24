import GameSavingLoader from '../loader';

test('test', async () => {
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  });
});

test('test error', async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
