import getHealthStatus from './health';

test('health > 50 → healthy', () => {
  expect(getHealthStatus({ name: 'маг', health: 90 })).toBe('healthy');
});

test('health = 50 → wounded', () => {
  expect(getHealthStatus({ name: 'маг', health: 50 })).toBe('wounded');
});

test('15 <= health < 50 → wounded', () => {
  expect(getHealthStatus({ name: 'маг', health: 25 })).toBe('wounded');
});

test('health < 15 → critical', () => {
  expect(getHealthStatus({ name: 'маг', health: 10 })).toBe('critical');
});