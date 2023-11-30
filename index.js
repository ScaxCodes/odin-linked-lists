class LinkedList {
  constructor() {
    this.nodes = [];
  }

  append(value) {
    if (this.nodes.length === 0) {
      console.log("Linked list is empty, adding first element");
      this.nodes.push(new Node(value));
    } else {
      console.log("Linked list not empty, searching tail node");
      const tailNodeIndex = this.nodes.findIndex(
        (element) => element.nextNode === null
      );
      this.nodes.push(new Node(value));
      this.nodes[tailNodeIndex].nextNode = tailNodeIndex + 1;
    }
  }

  prepend(value) {
    this.nodes.splice(0, 0, new Node(value, 1));
    this.nodes.forEach((node, index) => {
      if (node.nextNode === null || index === 0) return;
      node.nextNode = index + 1;
    });
  }

  size() {
    return this.nodes.length;
  }

  head() {
    return this.nodes[0];
  }

  tail() {
    return this.nodes[this.nodes.length - 1];
  }

  at(index) {
    return this.nodes[index];
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const ok = new LinkedList();
ok.append("yolo");
ok.append("yolo2");
ok.prepend("zolo");
console.log(ok);
