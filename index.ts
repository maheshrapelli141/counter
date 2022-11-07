export function counter(value: number = 0){
    let _val: number = value;
    const getVal = () => _val;
    const nextVal = () => { _val++ };
    return [getVal,nextVal];
}

const [getA,nextA] = counter(1);
console.log(1,getA());
nextA();
console.log(1,getA());


const [getB,nextB] = counter(10);
console.log(1,getB());
nextB();
console.log(1,getB());
