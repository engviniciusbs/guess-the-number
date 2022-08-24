// Criei a função fetchNumber utilizando função fetch para requisitar os valores que a API retorna. Caso venha a dar algum erro, ele irá me retornar a mensagem escolhida.

async function fetchNumber() {
    const response = await fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300');
    const number = await response.json();
    if(response.status === 502){
        throw new Error('Something went wrong');
    }
    return number;
}