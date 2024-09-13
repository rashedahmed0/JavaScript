function greeting(greetingHandler, name) {
    greetingHandler(name)
}

function greetingHandler(name) {
    console.log('hello everyone', name);
}
function greetEvening(name) {
    console.log('good evening', name);
}
function greetNoon(name) {
    console.log('good noon ', name);
}
greeting(greetingHandler, 'rial')
greeting(greetingHandler, 'rashed')
greeting(greetEvening, 'ahmed')
greeting(greetNoon, 'ahommod');
