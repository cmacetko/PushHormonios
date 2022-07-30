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

var ObjJob3A;
var ObjJob3B;
var ObjJob3C;
var ObjJob3D;
var ObjJob3E;

function AbrirNotificacao(Mensagem)
{

    notifier.notify(
    {
        title: 'Trans',
        message: Mensagem,
        icon: __dirname + '/icons/trans.png',
        sound: true,
        wait: true ,
        timeout: 900
    },
    function (err, response, metadata) {
    
        if(err) 
        {
            
            console.error(err);

        }
    
    }
    );

}

function AbrirNotificacao2(Mensagem)
{

    notifier.notify(
    {
        title: 'Fono',
        message: Mensagem,
        icon: __dirname + '/icons/respiracao.png',
        sound: true,
        wait: true ,
        timeout: 900
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



    ObjJob1A = schedule.scheduleJob({hour: 11, minute: 45}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Acetato de Ciproterona (50 mg = 1 comprimido) + Estradiol (2 mg = 1 comprimido) + Vitaminas");
    
    });

    ObjJob1B = schedule.scheduleJob({hour: 12, minute: 20}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Acetato de Ciproterona (50 mg = 1 comprimido) + Estradiol (2 mg = 1 comprimido) + Vitaminas");
    
    });

    ObjJob1C = schedule.scheduleJob({hour: 12, minute: 30}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Acetato de Ciproterona (50 mg = 1 comprimido) + Estradiol (2 mg = 1 comprimido) + Vitaminas");
    
    });


	
	
    ObjJob2A = schedule.scheduleJob({hour: 19, minute: 10}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Estradiol (4 mg = 2 comprimidos)");
    
    });

    ObjJob2B = schedule.scheduleJob({hour: 19, minute: 30}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Estradiol (4 mg = 2 comprimidos)");
    
    });

    ObjJob2C = schedule.scheduleJob({hour: 19, minute: 50}, function(){

        console.log('scheduleJob');
        AbrirNotificacao("PALOMA toma os HORMONIOS!!!!", "Estradiol (4 mg = 2 comprimidos)");
    
    });












    ObjJob3A = schedule.scheduleJob({hour: 9, minute: 0}, function(){

        console.log('scheduleJob');
        AbrirNotificacao2("Exercicios de Respiracao", "");
    
    });

    ObjJob3B = schedule.scheduleJob({hour: 13, minute: 0}, function(){

        console.log('scheduleJob');
        AbrirNotificacao2("Exercicios de Respiracao", "");
    
    });

    ObjJob3C = schedule.scheduleJob({hour: 17, minute: 0}, function(){

        console.log('scheduleJob');
        AbrirNotificacao2("Exercicios de Respiracao", "");
    
    });

    ObjJob3D = schedule.scheduleJob({hour: 19, minute: 0}, function(){

        console.log('scheduleJob');
        AbrirNotificacao2("Exercicios de Respiracao", "");
    
    });

    ObjJob3E = schedule.scheduleJob({hour: 21, minute: 0}, function(){

        console.log('scheduleJob');
        AbrirNotificacao2("Exercicios de Respiracao", "");
    
    });
	
	
	
	


}

console.log("Iniciar...");

InitCron();