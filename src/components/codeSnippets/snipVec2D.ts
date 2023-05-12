export const codeNewVec2D = ` ... = new Vec2D(x,y);`;
export const codeVecSet = `this.vector.set(x,y);`;
export const codeVecAdd = `this.vector.add(vector);`;
export const codeVecSub = `this.vector.sub(vector);`;
export const codeVecAddExample = `const pos = new Vec2D(1,3);
const offset = new Vec2D(2,2);
pos.add(offset); // dodawanie innego wektora
console.log(pos.get()) // {x:3,y:5}
offset.add([1,3]); // dodawanie listy punktu jako wektora
console.log(offset.get()) // {x:3,y:5}`;
export const codeVecSubExample = `const pos = new Vec2D(1,3);
const offset = new Vec2D(2,2);
pos.sub(offset); // odejmowanie innego wektora
console.log(pos.get()) // {x:-1,y:1}
offset.sub([1,3]); // dodawanie listy punktu jako wektora
console.log(offset.get()) // {x:1,y:-1}`;
export const codeVecGet = `this.vector.get();
console.log(this.vector.get()) // zwraca {x:1,y:3}
console.log(this.vector.get().x) // zwraca 1`;
export const codeVecNormalize = `this.vector = new Vec2D(3,5); 
console.log(this.vector.normalize()); // zwraca {x:0.5,y:0.8} `;
export const codeVecScale = `this.vector.scale(x,y);`;
export const codeVecScaleExapmle = `this.vector = new Vec2D(2,2);
this.vector.scale(2); // skalowanie obu punktów wektora przez 2
console.log(this.vector.get()) //zwraca {x:4,y:4}
this.vector.set(2,2);
this.vector.scale(2,3); // skalowanie osobno x i y
console.log(this.vector.get()) // zwraca {x:4,y:6}`;
export const codeVecLength = `this.vector = new Vec2D(3,4);
console.log(this.vector.length()); // zwraca 5`;
export const codeVecDist = `const vecA = new Vec2D(2,4);
const vecB = new Vec2D(6,7);
console.log(vecA.distanceToOtherVec2D(vecB)); // zwraca 5`;
