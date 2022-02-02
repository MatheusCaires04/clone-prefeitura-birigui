function dateComplete(){
    var semana = [
        "Domingo", 
        "Segunda-Feira", 
        "Terça-Feira", 
        "Quarta-Feira", 
        "Quinta-Feira", 
        "Sexta-Feira", 
        "Sábado"]
    var mes = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ]
    var date = new Date()
    var dateComplete = semana[date.getDay()] + ' ' + 
                       date.getDate() + ' de ' + 
                       mes[date.getMonth()] + ' de ' + 
                       date.getFullYear()
                       document.getElementById('date').innerHTML = dateComplete
}

dateComplete()