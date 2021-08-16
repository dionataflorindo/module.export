module.exports.quadrado = function quadrado(lado){return lado * lado};

module.exports.retangulo = function retangulo(base , altura){
    return base + altura
};
module.exports.triangulo = function triangulo(base, altura){
    return base * altura
};

module.exports.circulo = function circulo(raio){ 
    const pi =  3.1416; return pi + raio
}