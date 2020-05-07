const DLL = require('./DLL');

function main(){

  let list = new DLL(['Aquaria', 'Caprica', 'Gemenon']);
  list.insertAfter('Gemenon', 'Sagittaron');
  list.insertBefore('Sagittaron', 'Picon');

  list.insertLast('Tauron');
  list.remove('Picon');

  console.log(list.find('Aquaria'));

}

main();