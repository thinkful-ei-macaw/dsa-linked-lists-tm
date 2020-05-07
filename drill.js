const {
  LinkedList, display, size,
  isEmpty, findPrevious, findLast,
  reverseList, thirdFromEnd, findMiddle } = require('./LinkedList');

function main() {
  const SLL = new LinkedList();

  //SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tahuida');

  // SLL.remove('squirrel');

  SLL.insertBefore('Starbuck', 'Athena');
  SLL.insertAfter('Tahuida', 'Hotdog');

  SLL.insertAt(2, 'Kat');
  
  // display(SLL);
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));

  // const emptySLL = new LinkedList();
  // // console.log(isEmpty(emptySLL));

  // console.log(findPrevious(SLL, 'Kat').value);
  // console.log(findLast(SLL).value);
  // reverseList(SLL);
  display(SLL);
  //console.log(thirdFromEnd(SLL));
  console.log(findMiddle(SLL))

}

main();

//------------------------------------------

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//This function is removing and nodes with duplicate value 
//The complexity is exponential because it's iterating through each node for every node in the list.

