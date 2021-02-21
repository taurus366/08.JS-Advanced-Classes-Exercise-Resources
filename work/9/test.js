let g = {
    audi: [{
        model: 'x6',
        price: 1000
    },
        {
            model: 'x7',
            price: 10002
        }]
}


//console.log(g["audi"].some(s => s.model === 'x7')  )
console.log(g["audi"].find(s => s.model === 'x8') === undefined)