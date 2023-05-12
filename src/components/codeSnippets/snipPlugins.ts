export const codeExtendsPlugin = `import Plugin from "./plugin";
...
export default class MyPlugin extends Plugin {
    constructor({ position, size, layer, siblings, referanceName }) {
      super(position, size, siblings, layer, referanceName);
    }
}`;
export const codeTypeExtends = `export interface MyPluginType extends MyPlugin{};`;
export const codeUpdateAndRenderExample = `export default class MyPlugin extends Plugin {
    constructor({ position, size, layer, siblings, referanceName }) {
      super(position, size, siblings, layer, referanceName);
    ...
    }
    ...
    update(){
        this.CalculateMyComponentRoute() // przykładowe użycie update do wykonania obliczeń Pluginu
    }
    render(){
        this.renderMyPlug() // przykładowe użycie render do wyświetlenia pluginu
    }
}`;
export const codePluginList = `import KeyEvents from ".../keyEvents";
import MouseEvents from ".../mouseEvents";
import Renderer from "..../renderer";
import MyNewPlugin from ".../MyNewPlugin";
...
const pluginList = {
  Renderer,
  MouseEvents,
  KeyEvents,
  MyNewPlugin, // dodany własny Plugin o takiej samej nazwie jak klasa
  MySuperDuperPhysics: MyNewPlugin, // dodany plugin o sprecyzowanej nazwie
  ...
};
`;
export const codeAbstractClass = `export default abstract class Plugin {
  position: Vec2DType;
  size: Vec2DType;
  protected siblings: Plugin[];
  layer: string;
  referanceName: string;
  constructor(...) {
  ...  
  }

  setup(): void {}
  update(): void {}
  render(): void {}
}
`;
export const codeGlobals = `export const myImportantGloblThing = "important message";
...
export interface MouseEventsType extends MouseEvents {}
export default class MouseEvents extends Plugin {
  constructor(...) {
    super(...);
  ...
  }
}
`;
