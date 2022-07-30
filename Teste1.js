var notifier = require('node-notifier');

function AbrirNotificacao(Titulo, Mensagem)
{

    notifier.notify(
    {
    title: Titulo,
    message: Mensagem,
    icon: __dirname + '/icons/trans.png',
    sound: true,
    wait: true ,
    timeout: 300
    },
    function (err, response, metadata) {
    
        if(err) 
        {
            
            console.error(err);

        }
    
    }
    );

    notifier.on('ok', () => {
    console.log('"Ok" was pressed');
    });

}

console.log("Iniciar...");

setTimeout(function(){

    //AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Estradiol (4 mg = 2 comprimidos)");

    AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Acetato de Ciproterona (50 mg = 1 comprimido) + Estradiol (2 mg = 1 comprimido) + Vitaminas");

}, 1000);