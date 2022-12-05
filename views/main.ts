import "./styles/index.less";

import { render } from "@/web";
import { cmpt } from "./examples/template";

const instance = cmpt();
const slot = document.getElementById("app");
render(instance, slot!);
console.log(instance);
