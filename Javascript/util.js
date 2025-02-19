function printDl(dll) {
  let current = dll.head;
  let result = "";

  while (current) {
    result += current.value;
    if (current.next) {
      result += ' <-> ';
    }
    current = current.next;
  }

  console.log(result);
}



module.exports = Object.freeze({
  printDl,
})