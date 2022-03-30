let son1 =prompt('birinchi sonni kiriting')
let son2 =prompt('ikkinchi sonni kiriting')
let son3 =prompt('uchinchi sonni kiriting')

if(son1 < son2 && son1 > son3 || son1 > son2 && son1 < son3 ){
alert('birinchi= ' + son1)
}else if(son2 < son1 && son2 > son3 || son2 > son1 && son2 < son3 ) {
alert('ikkinchi =' + son2)
}else if(son3 < on1 && son2 > son3 || son3 > son1 && son2 < son3 ){
alert('uchinchi =' + son3)
}