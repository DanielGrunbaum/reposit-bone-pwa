import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  @property() message = 'Welcome!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    console.log('This is your home page');
  }

  render() {
    return html`
      <app-header></app-header>

      <main><div>
      <iframe src="https://bonealimentos.com" style="width: 100%; height: 100vh; border: none;"></iframe>
      </div></main>
    `;
  }
}
