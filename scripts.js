function sum() {
    console.log(arguments);
}

sum(); //[] (zobacz dokładniej co wyszło w konsoli, bo wynik nie jest dokładnie taki)
sum(1,2,3,4); //[1,2,3,4]
