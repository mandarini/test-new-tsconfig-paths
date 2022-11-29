import './app.element.css';
import { sharedTwo } from '@beta4/shared/two';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `<div class="container">
    <p>Message from sharedTwo in web app: ${sharedTwo()}</p>
    </div>`;
  }
}
customElements.define('beta4-root', AppElement);
