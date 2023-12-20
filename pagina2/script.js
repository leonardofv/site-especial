
// function encerrar() {
//     let res = window.prompt("Gostou desse presente ? [S/N]");

//         if(res.toLowerCase() == 's') {
//             window.alert('Uiiiiii ❤️❤️❤️')
//         }else if(res.toLowerCase() == 'n'){
//             window.alert('Poxinha 💔💔💔')
//         } 
// }

function encerrar() {
    let res;
    
    do {
        res = window.prompt("Gostou desse presente? [S/N]");
        res = res ? res.trim().toLowerCase() : ''; // Trata a possibilidade de o usuário pressionar Cancelar no prompt
    } while (res !== 's' && res !== 'n');

    if (res === 's') {
        window.alert('Uiiiiii ❤️❤️❤️');
    } else {
        window.alert('Poxinha 💔💔💔');
    }
}
