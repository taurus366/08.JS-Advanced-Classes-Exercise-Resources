    const numberOperations = require('./numberOperations');
    const {expect,assert} = require('chai');

    // describe('test1',()=>{
    //     // it('should ',()=> {
    //     //     //  assert.equal(testSum(1,2),3)
    //     //    // expect(1).to.equal(1);
    //     // });
    //
    //     it('powNumber',()=> {
    //         expect(numberOperations.powNumber(0)).to.equal(0);
    //         expect(numberOperations.powNumber(-1)).to.equal(1);
    //         expect(numberOperations.powNumber(5)).to.equal(25);
    //     });
    // })


   // describe("Tests …", function() {
        describe('powNumber',()=>{
            it('powNumber',()=> {
                expect(numberOperations.powNumber(0)).to.equal(0);
                expect(numberOperations.powNumber(-1)).to.equal(1);
                expect(numberOperations.powNumber(5)).to.equal(25);
            });
            it('numberChecker',()=> {
                expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
                expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
               // expect(numberOperations.numberChecker('a')).to.throw(Error('The input is not a number!'));
               // expect(numberOperations.numberChecker('a')).to.throw('The input is not a number!');
                expect(()=> numberOperations.numberChecker('z')).to.throw('The input is not a number!')

            });

            it('sumArrays',()=> {
               expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.deep.equal([2,4,6]);
               expect(numberOperations.sumArrays([],[])).to.deep.equal([]);
               expect(numberOperations.sumArrays([1],[])).to.deep.equal([1]);
               expect(numberOperations.sumArrays([-1],[])).to.deep.equal([-1]);
               expect(numberOperations.sumArrays([0],[])).to.deep.equal([0]);
            });
        })

        // describe('numberChecker',()=>{
        //
        // })

  //  });
