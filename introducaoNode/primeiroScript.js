console.log("n-fatorial");
console.log(`Executando o script do diretorio ${process.cwd()}`);

process.on("exit",() => {
    console.log('script esta prestes a terminar');
});

const fatorial = (num) => {
    if(num === 0) {
        return 1
    }

    return num * fatorial(num-1);
}

const num = parseInt(process.argv[2]);

console.log(`O fatorial de ${num} é ${fatorial(num)}`);