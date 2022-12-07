var obj = {count: 0};
obj.increment = function (amount) {
    this.count += amount;
    return this.count;
}

document.getElementById("1").innerHTML=obj.increment(1);
