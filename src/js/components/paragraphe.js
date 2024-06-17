export const div = function (element1, element2) {
  return ` <span id="divi">
 <div>${element1}</div> <div>${element2}</div> </span>`;
};

export const addElements = function (data) {
  const ele = document.createElement("div");
  const body = document.getElementById("divi");
  ele.innerText = data;
  body.appendChild(ele);
};
