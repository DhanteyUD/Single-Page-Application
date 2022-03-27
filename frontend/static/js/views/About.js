import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('About');
  }

  async getHtml() {
    return `
      <h1> This ia about me </h1>
      <p> You are welcome</p>
      <p>
        <a href="/about" data-link> View about us </a>
      </p>
    `;
  }
}
