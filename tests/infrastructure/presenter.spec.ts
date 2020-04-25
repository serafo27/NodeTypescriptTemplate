import { Presenter } from '../../src/infrastructure/presenter'

describe('Presenter', () => {

  const presenter = new Presenter();

  it('say hello', () => {

    const name = 'Jhon';
    const actual: string = presenter.sayHello(name);

    expect(actual).toEqual('My name is Jhon')
  })

})