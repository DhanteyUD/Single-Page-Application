import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Home');
  }

  async getHtml() {
    return `
      <h1> Welcome Back, Dev! </h1>
      <p> This is called home </p>
      <p>
        <a href="/about" data-link> View about us </a>
      </p>
    `;
  }
}
