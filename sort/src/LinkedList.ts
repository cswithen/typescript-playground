import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let previousLeft = null;
    let currentLeft = this.head;

    while (
      currentLeft !== null &&
      currentLeft.data !== this.at(leftIndex).data
    ) {
      previousLeft = currentLeft;
      currentLeft = currentLeft.next;
    }

    let previousRight = null;
    let currentRight = this.head;

    while (
      currentRight !== null &&
      currentRight.data !== this.at(rightIndex).data
    ) {
      previousRight = currentRight;
      currentRight = currentRight.next;
    }

    if (currentLeft === null || currentRight === null) {
      throw new Error("value not present");
    }

    if (previousLeft !== null) {
      previousLeft.next = currentRight;
    } else {
      this.head = currentRight;
    }

    if (previousRight !== null) {
      previousRight.next = currentLeft;
    } else {
      this.head = currentLeft;
    }

    let tempNode = currentLeft.next;
    currentLeft.next = currentRight.next;
    currentRight.next = tempNode;

    // const leftNode = this.at(leftIndex);
    // const rightNode = this.at(rightIndex);

    // const leftHand = leftNode.data;
    // leftNode.data = rightNode.data;
    // rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let printable = [];

    let node: Node | null = this.head;
    while (node) {
      printable.push(node.data);
      node = node.next;
    }

    console.log(printable.join(" -> "));
  }
}
