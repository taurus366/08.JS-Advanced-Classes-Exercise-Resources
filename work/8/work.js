function solve(arr) {
    let map = new Map();
    let juice = new Map();

    arr
        .forEach(line => {
            let [key, value] = line.split(' => ');
            if (!map.has(key)) {
                map.set(key, Number(value));
            } else {
                map.set(key, map.get(key) + Number(value))
            }

            while (map.get(key) >= 1000) {
                if (juice.has(key)) {
                    map.set(key, map.get(key) - 1000)
                    juice.set(key, juice.get(key) + 1);
                } else {
                    map.set(key, map.get(key) - 1000)
                    juice.set(key, 1);
                }
            }


        })
    let returnForString = '';
    for (let [key, value] of juice.entries()) {
        console.log(`${key} => ${value}`);
    }
    juice.entries()


}


(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
))
// console.log(solve(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']
//
// ));