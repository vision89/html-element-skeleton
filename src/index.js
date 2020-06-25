/**
 * TODO: Change this to import your element
 */
import HelloWorld from './lib/helloworld'


/**
 * TODO: Change this define your element as a custom element
 */
customElements.define('hello-world', HelloWorld);

/**
 * Select our helloworld element
 */
let helloWorld = document.querySelector('hello-world');

/**
 * This is how to send data to the setter
 * Note that if you want to be declarative then you
 * need to watch the attribute
 */
helloWorld.data = 'Hello world member data!';