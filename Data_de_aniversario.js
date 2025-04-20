var agora = new Date();
var dia = agora.getDate();
var mes = agora.getMonth();
mes += 1;
var diaaniversario = 0;
var mesaniversario = 0;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
});

rl.question('Digite o dia do seu aniversário: ',(dia_resp) =>{
    diaaniversario = parseInt(dia_resp);
    rl.question('Digite o mês do seu aniversário: ', (mes_resp) => {
        mesaniversario = parseInt(mes_resp);
        rl.close();
        
        if (mes < mesaniversario) {
            if((mesaniversario-mes)==1){
                const diasamais = 30 + diaaniversario;
                console.log(`Faltam ${dia-diaaniversario} dias para seu aniversário`);
           console.log ('Estou funcionando');
            }
        }
        else if (mes == mesaniversario) {
            if (dia < diaaniversario) {
                console.log(`Faltam cerca de ${diaaniversario-dia} dias para o seu aniversário`);
            }
            else if (dia == diaaniversario) {
                console.log('Meus parabéns, hoje é seu aniversário');
            }
            else {
                console.log(`Seu aniversário foi há ${dia-diaaniversario} dias atrás`);
            }
        }
        else {
            console.log(`Seu aniversário foi há ${mes-mesaniversario} meses atrás`);
        }
    });
});
