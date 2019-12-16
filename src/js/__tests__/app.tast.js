/* eslint-disable linebreak-style */
import Character from '../app';

test('success levelUp', () => {
  const bowman = new Character();
  bowman.damage(20);
  bowman.levelUp();
  expect([bowman.health, bowman.level, bowman.attack, bowman.defense]).toEqual([100, 2, 30, 30]);
});

test('success levelUp', () => {
  const bowman = new Character();
  bowman.damage(100);
  expect(() => bowman.levelUp()).toThrow('Нельзя повысить левел умершего');
});
