function serve(){
 console.log('Serve it in cups');
}
function wait(serve){
 console.log('Wait for 2 to 3min');
  serve()
}
function sugar(wait){
 console.log('Add Tea powder and sugar');
  wait(serve)
}
function boil(sugar){
 console.log('boil for 5min');
 sugar(wait);
}
function milk(boil){
 console.log('Take 250ml milk');
 boil(sugar);
}
function Tea(milk){
 setTimeout(() => {
milk(boil)
 console.log('Hot tea is ready');
 }, 2000);
}
Tea(milk);
console.log('Lets make a Tea');
