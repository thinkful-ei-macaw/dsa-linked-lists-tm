const LinkedList = require('./LinkedList')

function main() {
  const SLL = new LinkedList

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tahuida');

  //SLL.remove('squirrel')

  SLL.insertBefore('Starbuck', 'Athena')
  SLL.insertAfter('Tahuida', 'Hotdog')

  SLL.insertAt(1, 'Kat')

  console.log(SLL)
}

main();