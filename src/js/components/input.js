export function inpute(data, sup) {
  return `<input  id="${sup}" placeholder="${data}"></input>`;
}

export const nav = function (params) {
  return `<ul>
    <li><a>Home</a></li>
    <li><a>News</a></li>
    <li><a>Contact</a></li>
    <li><a>About</a></li>
  </ul>`;
};

export const para = function (data) {
  return `<p>${data}</p>`;
};



