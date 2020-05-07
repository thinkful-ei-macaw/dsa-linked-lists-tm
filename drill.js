const { LinkedList, display, size, isEmpty, findPrevious, findLast } = require('./LinkedList');

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tahuida');

  // SLL.remove('squirrel');

  SLL.insertBefore('Starbuck', 'Athena');
  SLL.insertAfter('Tahuida', 'Hotdog');

  SLL.insertAt(2, 'Kat');
  
  display(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL));

  // const emptySLL = new LinkedList();
  // console.log(isEmpty(emptySLL));

  console.log(findPrevious(SLL, 'Kat').value);
  console.log(findLast(SLL).value);

}

main();