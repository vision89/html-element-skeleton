/**
 * TODO: Change this to import your element
 */
import HelloWorld from './lib/helloworld'
import Mustache from 'mustache'

/**
 * Note that this order of events is important.
 * We need to render the template before selecting our custom
 * element and setting data. As of now we would need to rerender
 * anytime an attribute changes.
 * TODO: Look into a more organized way of doing this
 */
function renderTemplate(data) {
    /**
     * Select the body for binding
     */
    let body = document.querySelector('body');

    /**
     * Render the template
     */
    body.innerHTML = Mustache.render(body.innerHTML, data);
}

// Render the template before we do anything else
renderTemplate({
    'prop': 'Hello world attribute data!'
});

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