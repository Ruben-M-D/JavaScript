function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();
console.log(functionVar);
console.log(functionLet);
console.log(functionConst); 