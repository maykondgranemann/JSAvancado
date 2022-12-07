// Teste de execução assincrona para exemplificar o uso de event even

function c(){
    console.log('C');
    return;
}
function b(){
    c();
    setTimeout(()=>{console.log('B');}, 1000); 
    return;
}

function a(){
    b();
    console.log('A');
    return;
}

a();
