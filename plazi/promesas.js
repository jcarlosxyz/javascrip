//promesas en javascrip 
const helloPromise = () =>{

    return  new Promise((resolver, reject) => { 
        if (false){
            resolver('Hey');
        }else {
            reject('Upss..');
        }

    } );
};

helloPromise()
   .then(response => console.log(response))
   .then(()=> console.log('hola'))
   .catch (error => console.log(error))


//progracion objeto 
class calculador {
    construtor() {
        this.valorA = 0;
        this.valorB = 0;

    }
 sum(valorA,valorB){
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA + this.valorB;
 }
}   
//cear el objeto 

const cals = new calculador();

console.log(cals.sum(2,2));