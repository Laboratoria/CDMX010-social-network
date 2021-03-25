// importamos la funcion que vamos a testear
import { onNavigate } from '../src/routers.js';

describe('onNavigate', () => {
  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
