import * as dotenv from 'dotenv';
import { Presenter } from './infrastructure/presenter';

dotenv.config()

const presenter = new Presenter();

console.log(presenter.sayHello('Jhon'))