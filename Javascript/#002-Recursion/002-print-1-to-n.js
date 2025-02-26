function printnumber(i, n) {
  if(i>n) return;
  console.log(i);
  i++;
  printnumber(i, n);
}

printnumber(1, 10)
