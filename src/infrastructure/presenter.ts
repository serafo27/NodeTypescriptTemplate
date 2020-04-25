
export class Presenter {
  
  private readonly presentation = 'Hello my name is ';
  
  sayHello = (name: string): string => {
    return this.presentation + name
  }
}