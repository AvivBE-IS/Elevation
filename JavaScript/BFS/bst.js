class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(value) {
    if (this.value === value) return true;
    if (this.value > value && this.leftChild)
      return this.leftChild.findNode(value);
    if (this.value < value && this.rightChild)
      return this.rightChild.findNode(value);

    return false;
  }
  //   findNode(value){
  //     do
  //     {
  //         if(this.value === value) return true;
  //         if( this.value > value && this.leftChild) return this.findNode(this.leftChild);
  //         if(this.value < value && this.rightChild) return this.findNode(this.rightChild);
  //     }
  //     while(!this.leftChild || this.rightChild)
  //     return false;
  //   }
}
let tree = new BSNode("H");
tree.insertNode("E");
tree.insertNode("G");
tree.insertNode("S");
tree.insertNode("L");
tree.insertNode("Y");
tree.insertNode("I");
