const { DoublyLinkedList, reverseDLL } = require('./DLL');
const { display } = require('./LinkedList');

function main(){

  let list = new DoublyLinkedList(['Aquaria', 'Caprica', 'Gemenon']);
  list.insertAfter('Gemenon', 'Sagittaron');
  list.insertBefore('Sagittaron', 'Picon');

  list.insertLast('Tauron');
  list.remove('Picon');

  display(list);
  reverseDLL(list);
  display(list);

}

main();