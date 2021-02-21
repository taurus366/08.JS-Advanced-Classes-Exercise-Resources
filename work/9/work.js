function solve(inputArr) {
    let cars = {};

    inputArr
        .forEach(l => {
            let input = l.split(' | ');
            let carBrand = input[0];
            let carModel = input[1];
            let carPrice = Number(input[2]);

            if (!cars.hasOwnProperty(carBrand)) {
                cars[carBrand] =[];
                cars[carBrand].push({carModel, carPrice});

            }else {


                if (cars[carBrand].find(c => c.carModel === carModel) !== undefined){

                    cars[carBrand].find(c => c.carModel === carModel).carPrice += carPrice;

                }else {
                    cars[carBrand].push({carModel,carPrice});
                }
            }



        })
    let string = '';
    for (const car in cars) {
     string += `${car}\n`;
     cars[car]
         .forEach(car => {
             string += `###${car.carModel} -> ${car.carPrice}\n`;
         })


    }
    console.log(string)

}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
// solve([
//     'Mini | Clubman | 20000',
//     'Mini | Clubman | 1000'])
