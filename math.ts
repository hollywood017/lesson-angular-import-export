//math.ts
                              //must return a number
                              //          |
export function powerOf2(x:number = 0): number{
    //                              |
    //if no "x" is provided, "x" is 0.
    return x * x;

}
//module.exports = powerOf2;

export function randomInteger(max: number = 100): number{
  return Math.floor(Math.random() * max);
}
