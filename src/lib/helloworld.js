import styles from '../styles/styles.scss';

/**
 * TODO: Change this to your html template
 */
const template = `
    <style>${styles.toString()}</style>
    <div class="helloworld">
        <p>Hello World Element (Inside the element)</p>
        <p id="data"></p>
        <p id="dataattr"></p>
    </div>
`;

/**
 * TODO: Update class to your html element class
 */
class HelloWorld extends HTMLElement {
    constructor() {
        super();

        // Properties
        // This is what getting data may look like
        this._data;
        this._dataattr = '';

        /**
         * This is what setting a function attribute may look like
         * this._callback;
         */

        // Add a shadow DOM
        let shadowDOM = this.attachShadow({mode: 'open'});

        // Render the template in the shadow dom
        shadowDOM.innerHTML = template;

    }

    //Getter and setter for data you send in
    set data (d) {
        this._data = d;
        this.renderChange();
    }

    get data() {
        return this._data;
    }

    /**
     * If using a function to communicatec changes, do something like this
     * set onSelect(fn) {
     *      this._callback = fn;
     * }
     */


    /**
     * If watching attributes use this. Your attributes names should
     * replace 'dataattr' and be comma separated
     */
     static get observedAttributes() {
         return ['dataattr'];
     }

    /**
     * If an observed attribute is changed, this is called
     */
     attributeChangedCallback(attr, oldVal, newVal) {
      
         // Nothing to do here
         if(oldVal === newVal) return;
         // Something to do here
         switch(attr) {
            case 'dataattr':
                this._dataattr = newVal;
                this.renderChange();
                break;
        }
    }

    /**
     * Called when the element is loaded, if you are doing something like
     * putting an onclick method on a button, do that here. Be sure to bind 
     * the method to "this"
     * connectedCallback() {
     *     //someElm.onclick = this.someMethod.bind(this);
     * }
     */

    /**
     * This isn't strictly a part of html elements, but it's easier to put
     * dom manipulation in one spot and call it whenever you need to update 
     * the element, you could do that here
     */
    renderChange() {
        let p1 = this.shadowRoot.querySelector('#data');
        let p2 = this.shadowRoot.querySelector('#dataattr');
        p1.innerHTML = this._data;
        p2.innerHTML = this._dataattr;
    }

}

/**
 * TODO: Update to export your class
 */
export default HelloWorld;