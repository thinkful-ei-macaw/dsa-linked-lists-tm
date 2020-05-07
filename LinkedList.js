class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, newItem) {
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(newItem, currNode );
  }

  insertAfter(item, newItem) {
    let currNode = this.find(item);
    if (currNode === null) {
      console.log('Item not found');
      return;
    } 
    currNode.next = new _Node(newItem, currNode.next);
  }

  insertAt(position, newItem) {
    let currNode = this.head;
    let currPosition = 1;
    let previousNode = this.head;

    if (!this.head) {
      console.log(`Cannot insert at ${position}`);
      return null;
    }

    while (currPosition !== position) {
      if (currNode.next === null) {
        console.log(`Cannot insert at ${position}`);
        return null;
      }
      else {
        previousNode = currNode;
        currNode = currNode.next;
        currPosition++;
      }
    }
    if (position === 1 ) {
      this.head = new _Node(newItem, currNode.next);
    }
    else {
      previousNode.next = new _Node(newItem, currNode.next);
    }
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(SLL) {
  let currNode = SLL.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(SLL) {
  let counter = 0;
  let currNode = SLL.head;

  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }

  return counter;
}

function isEmpty(SLL) {
  return SLL.head === null;
}

function findPrevious(SLL, item) {
  let currNode = SLL.head;
  let prevNode = SLL.head;

  while (currNode.next !== null && currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  if (currNode.value !== item) {
    console.log('Item not found');
    return;
  } else {
    return prevNode;
  }
}

function findLast(SLL) {
  let currNode = SLL.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  return currNode;
}

function reverseList(SLL) {
  let currNode = SLL.head;
  let prevNode = SLL.head;
  while (currNode !== null) {
    console.log(currNode.value);
    let nextNode = currNode.next;
    if (currNode === SLL.head) {
      currNode.next = null;    
    } else {
      currNode.next = prevNode;
    }
    SLL.head = currNode;
    prevNode = currNode;
    currNode = nextNode;
  } 
}

function thirdFromEnd(SLL) {
  // exit if no items in list
  if (SLL.head === null) return;

  // counter to index items in list
  let initialCounter = 1;
  let currNode = SLL.head;
  while (currNode !== null) {
    initialCounter++;
    currNode = currNode.next;
  }

  // need at least 3 items to work
  if (initialCounter < 3) return;

  // set target position and reset current node
  let targetPosition = initialCounter - 3;
  let targetCounter = 1;
  currNode = SLL.head;
  while (currNode !== null) {
    if (targetCounter === targetPosition) return currNode;
    targetCounter++;
    currNode = currNode.next;
  }

}

function findMiddle(SLL) {
  let targetPosition = Math.ceil(size(SLL)/2);
  console.log(targetPosition)
  let targetCounter = 0;
  let currNode = SLL.head;
  while (currNode !== null) {
    targetCounter++;
    if (targetCounter === targetPosition) {
      return currNode
    } 
    currNode = currNode.next
  }
}

module.exports =  {
  LinkedList,
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverseList,
  thirdFromEnd,
  findMiddle
};