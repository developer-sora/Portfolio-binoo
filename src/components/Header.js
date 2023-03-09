export default function Header({ $target }) {
  this.render = () => {
    const $header = document.createElement("header");
    $header.innerHTML = `
    <div class="logo">binoo</div>
    <div class="menu">
      <div class="about_menu">About</div>
      <div class="work_menu">Work</div>
    </div>
    `;
    $target.appendChild($header);
  };

  this.render();
}
