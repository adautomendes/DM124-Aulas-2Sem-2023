const print = value => console.log(value);
print("1");
setTimeout(() => print("2"), 5000);
print("3");