var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';

var nameUpperCase = dinosaur.toUpperCase();

console.log(nameUpperCase);

var textCharsAfter = text.replace('Velociraptor', dinosaur);

console.log(textCharsAfter);

console.log(text.length);

var partOfText = text.slice(0,73);

console.log(partOfText);