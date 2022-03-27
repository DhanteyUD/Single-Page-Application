import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Contact');
  }

  async getHtml() {
    return `
      <h1> Contact me today</h1>
      <p> Lets GO!!! </p>
      <p>
        <a href="/about" data-link> View about us </a>
    `;
  }
}
