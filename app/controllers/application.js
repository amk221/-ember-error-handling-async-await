import Controller from '@ember/controller';
import { action } from '@ember/object';
// import { reject } from 'rsvp';

export default class ApplicationController extends Controller {

  // @action
  // doSomethingAsyncThatFails() {
  //   return reject('failed');
  // }

  @action
  async doSomethingAsyncThatFails() {
    throw new Error('failed')
  }

}
