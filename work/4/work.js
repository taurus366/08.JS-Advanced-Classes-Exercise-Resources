class List {
    constructor() {
        this.value = [];
        this.size = 0;
    }

    add(number) {
        this.size++;
        this.sort();
        this.value.push(number)
    };

    get(number) {
        this.sort();
        return this.value[number]
    };

    remove(number) {

        if (this.value.length > 0 && (number >= 0 && number < this.value.length)) {
            this.value.splice(number, 1)
            this.size--;
            this.sort();
        }
        ;

    }


    sort() {
        this.value
            .sort((a, b) => a - b);
    }
}


let list = new List();
list.remove(0);
console.log(list.size)

