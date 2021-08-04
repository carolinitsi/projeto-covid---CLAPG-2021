import $ from 'jquery';
import sayHello from './utils/sayHello';

const App = () => {
  const $header = $('header');
  $header.addClass('started');

  sayHello();
};

App();
