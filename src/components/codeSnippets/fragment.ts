export const codeConstructor = `
export default class Fragment {
constructor({ pos, size, layer, targetDistanceMessuring, tag }: FragmentProps) {
    this.position = new Vec2D(pos.x, pos.y);
    this.size = new Vec2D(size.width, size.height);
    this.attachedPlugins = [];
    this.visible = true;
    this.updated = true;
    this.layer = layer;
    this.tag = tag;
    this.id = this.createRandomId();
    targetDistanceMessuring &&
      (this.distanceToTarget = new Map([
        ["tag", targetDistanceMessuring],
        ["fragment", undefined],
        ["distance", undefined]
      ]));
    this.layerList();
  }
  ...
}`;
export const codeFragmentProps = `export interface FragmentProps {
    pos: { x: number; y: number };
    size: { width: number; height: number };
    layer: "gameObjects" | "uiObjects" | "mapObjects" | "cameraObject" | "independent";
    tag: string;
    targetDistanceMessuring?: string;
  }`;
export const codeLayerList = `private layerList() {
    if (this.layer === "gameObjects") gameObjects.push(this);
    else if (this.layer === "uiObjects") uiObjects.push(this);
    else if (this.layer === "mapObjects") mapObjects.push(this);
  }`;
export const codeAttachPluginFunc = `
import pluginList from "./pluginList";
...
export default class Fragment {
... 
  attachPlugin(plugin: string, name?: string) {
      this.attachedPlugins.push(
        new pluginList[this.componentNameToUpper(plugin)]({
          position: this.position,
          size: this.size,
          layer: this.layer,
          id: this.id,
          siblings: this.attachedPlugins,
          referanceName: name ? name : plugin
        })
      );
      this[name ? name : plugin] = this.attachedComponents[this.attachedPlugins.length - 1];
  }
}`;
export const codeAttachPluginExampleOfThis = `export default class MyNewFragment extends Fragment {
  renderer?: RendererType;
  myMouse?: MouseEventsType;
  constructor(...){
    super(...);
    this.attachPlugin("renderer");
    this.renderer?.change(...); //wywoływanie funkcji bezpośrednio na nazwie pluginu
    this.attachPlugin("mouseEvents,myMouse");
    this.myMouse?.addEvent(...); //wywoływanie funkcji na własnej nazwie zamiast nazwy pluginu
  }
}`;
export const codeCodeCastingNotNull = `export default class MyNewFragment extends Fragment {
  renderer?: RendererType;
  ouseEvents!: MouseEventsType;
  constructor(...){
    super(...);
    this.attachPlugin("renderer");
    this.attachPlugin("mouseEvents");
    this.renderer?.change(...); //musimy upewnić się za każdym razem iż this.renderer istnieje.
    this.myMouse.addEvent(...); //daliśmy znać typescriptowi że this.mouseEvents na pewno będzie w tym momencie istniało.
  }
}`;
export const codePluginToUpper = `export default class Fragment {
...
  private pluginNameToUpper(name: string) {
  return [name[0].toUpperCase(), name.slice(1)].toString().replace(",", "");
  }
}`;
export const codeSetup = `
export default class Fragment {
  ...
  setup() {
  this.attachedPlugins.forEach((e) => e.setup());
    if (this.distanceToTarget) {
      this.distanceToTarget.set(
        "fragment",
        this.setTargetToDIstanceCheck(this.distanceToTarget.get("tag") as string)
      );
    }
  }
}`;
export const codeUpdate = `export default class Fragment {
  ...
  update() {
  this.updated && this.attachedPlugins.forEach((e) => e.update());
  if (
    this.distanceToTarget &&
    this.tag !== this.distanceToTarget.get("tag") &&
    this.layer !== "uiObjects"
  )
    this.distanceToTarget?.set(
      "distance",
      this.getDistance(this.distanceToTarget.get("fragment") as FragmentType)
    );
  }
}`;
export const codeRender = `export default class Fragment {
  ...
  render() {
  this.visible && this.attachedPlugins.forEach((e) => e.render());
  }
}`;
export const codesetTargetToDIstanceCheck = `export default class Fragment {
  ...
  private setTargetToDIstanceCheck(target: string) {
    const fragment = gameObjects.find((e) => e.tag === target);
    if (!fragment) throw new Error("Setting distance to Tag - wrong target");
    return fragment;
  }
}`;
export const codeGetDistance = `export default class Fragment {
  ...
  private getDistance(target: FragmentType) {
    if (!this.distanceToTarget) return -1;
    const a =
      this.position.get().x +
      this.size.get().x / 2 -
      (target.position.get().x + target.size.get().x / 2);
    const b =
      this.position.get().y +
      this.size.get().y / 2 -
      (target.position.get().y + target.size.get().y / 2);

    return Math.round(Math.sqrt(a * a + b * b));
  }
}`;
export const codeID = `export default class Fragment {
  ...
  private createRandomId() {
    return "_" + Math.random().toString(36).substring(2, 9);
  }
}`;
export const codeCreatingNewFragment = `import Fragment, { FragmentProps } from "../fragment/fragment";

export default class MyNewFragment extends Fragment {
  constructor({ pos, size, layer, tag, targetDistanceMessuring }: FragmentProps) {
    super({ pos, size, layer, tag, targetDistanceMessuring });
  }
}
`;
export const codeFragmentInvoke = ` new Tester({
  pos: { x: 40, y: 50 },
  size: { width: 80, height: 80 },
  layer: "gameObjects",
  tag: "my_animal_component",
  targetDistanceMessuring: "gameObject_player"
});`;
export const codeExtendSTR = `export default class MyNewFragment extends Fragment {
  constructor(...){
    super(...);
  }
  this.setup(){
    super.setup();
    ... // twoj kod
  }
  this.update(){
    super.update();
    ... // twoj kod
  }
  this.render(){
    super.render();
    ... // twoj kod
  }
`;
export const codeVisibleAndUpdated = `export default class MyNewFragment extends Fragment {
  constructor(...){
    super(...);
    this.visible = true // fragment będzie wyświetlał wszystkie swoje pluginy na Canvasie
    this.updated = false // fragment nie będzie aktualizwał swoich obliczeń
  }
`;
export const codeDynamicAny = `export default class Fragment {
  ...
  public size: Vec2DType;
  [index: string]: any;
  protected layer: FragmentProps["layer"];
  ...`;
