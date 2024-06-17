import * as components from "../components/paragraphe.js";
import * as entre from "../components/input.js";
const para = document.getElementById("container");
para.innerHTML = components.div(
  entre.nav(),
  entre.inpute("bienvenue", "input-1"),
);
;components.addElements("bien de bonsoir");
components.addElements("bien de bonsoir2");
