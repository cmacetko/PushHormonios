var schedule = require('node-schedule');
var notifier = require('node-notifier');

var ObjJob0A;
var ObjJob0B;
var ObjJob0C;

var ObjJob1A;
var ObjJob1B;
var ObjJob1C;

var ObjJob2A;
var ObjJob2B;
var ObjJob2C;

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


    ObjJob0A = schedule.scheduleJob({hour: 8, minute: 00}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS - Estradiol");
    
    });

    ObjJob0B = schedule.scheduleJob({hour: 8, minute: 10}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });

    ObjJob0C = schedule.scheduleJob({hour: 8, minute: 20}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });
    
    
    ObjJob1A = schedule.scheduleJob({hour: 11, minute: 45}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS - Estradiol + Acetato");
    
    });

    ObjJob1B = schedule.scheduleJob({hour: 12, minute: 20}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });

    ObjJob1C = schedule.scheduleJob({hour: 12, minute: 30}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });


    /*
    ObjJob2A = schedule.scheduleJob({hour: 19, minute: 10}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS - Estradiol");
    
    });

    ObjJob2B = schedule.scheduleJob({hour: 19, minute: 30}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });

    ObjJob2C = schedule.scheduleJob({hour: 19, minute: 50}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA tomou os HORMONIOS??");
    
    });
    */


}

console.log("Iniciar...");

InitCron();