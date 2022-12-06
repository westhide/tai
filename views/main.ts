import { render } from "@/web";
import { cmpt } from "./examples/template";
import "./styles/index.less";

const instance = cmpt();
const app = document.getElementById("app")!;
render(instance, app);
