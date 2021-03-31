var schedule = require('node-schedule');
var notifier = require('node-notifier');

var ObjJob1;
var ObjJob2;
var ObjJob3;

function AbrirNotificacao(Mensagem)
{

    notifier.notify(
    {
        title: 'Trans',
        message: Mensagem,
        icon: __dirname + '/icons/trans.png',
        sound: true,
        wait: true ,
        timeout: 30
    },
    function (err, response, metadata) {
    
        if(err) 
        {
            
            console.error(err);

        }
    
    }
    );

}

function InitCron()
{

    ObjJob1 = schedule.scheduleJob({hour: 11, minute: 45}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS");
    
    });

    ObjJob2 = schedule.scheduleJob({hour: 12, minute: 20}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });

    ObjJob3 = schedule.scheduleJob({hour: 12, minute: 30}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });

}

console.log("Iniciar...");

InitCron();