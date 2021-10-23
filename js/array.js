//Criação automática dos campos do sudoku//
function start(){
    for(var i =0; i<3; i++){
        var campos =''
        campos += '<tr>'
        campos += '<td>'
        campos += '<table border="1" id="tabela">'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo1" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo2" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo3" maxlength="1"></td>'
        campos += '</tr>'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo4" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo5" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo6" maxlength="1"></td>'
        campos += '</tr>'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo7" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo8" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo9" maxlength="1"></td>'
        campos += '</tr>'
        campos += '</table>'
        campos += '<td>'
        campos += '<table border="1" id="tabela">'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo1" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo2" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo3" maxlength="1"></td>'
        campos += '</tr>'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo4" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo5" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo6" maxlength="1"></td>'
        campos += '</tr>'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo7" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo8" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo9" maxlength="1"></td>'
        campos += '</tr>'
        campos += '</table>'
        campos += '</td>'
        campos += '<td>'
        campos += '<table border="1" id="tabela">'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo1" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo2" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo3" maxlength="1"></td>'
        campos += '</tr>'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo4" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo5" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo6" maxlength="1"></td>'
        campos += '</tr>'
        campos += '<tr>'
        campos += '<td><input type="text" id="campo7" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo8" maxlength="1"></td>'
        campos += '<td><input type="text" id="campo9" maxlength="1"></td>'
        campos += '</tr>'
        campos += '</table>'
        campos += '</td>'
        campos += '</tr>'
        document.getElementById('main').innerHTML += campos;

    }
}        
//Criação automática dos campos do sudoku//
//Cronometro//
var sec = 00
var min = 00
var hr =00
var interval
function twoDigits(digit){
    if(digit < 10){
        return("0" + digit)
    }
    else{
        return(digit)
    }
}

function startCron(){
    interval = setInterval(watch, 1000)
}
function pauseCron(){
    clearInterval(interval)
}
function stopCron(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText ='00:00:00'
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec= 0
    }
    if(min==60){
        min = 0
        hr++
    }
    document.getElementById('watch').innerText = twoDigits(hr) + ':' +twoDigits(min) + ':' + twoDigits(sec);
}
//Cronometro//

