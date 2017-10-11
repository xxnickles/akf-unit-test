describe('Calculate whether a number is odd and even', () => {

    describe('Logic', () => {
        
        const prefix = 'should mark your number as '
        let testData = [
            {
                input: 1,
                expectedResult: 'odd',
                label: prefix  + 'odd'
            },
            {
                input: 2,
                expectedResult: 'even',
                label: prefix  + 'even'
            },
            {
                input: 'xyz',
                expectedResult: 'invalid',
                label: prefix  + 'invalid when xyz'
            },
        ]
        
        for(var test of testData){
            it(test.label, () => {
                let result = window.checkOddAndEven(test.input)
                expect(result).to.equal(test.expectedResult)
            })
        }
       
        // it('should mark your number as even', () => {
        //     let result = window.checkOddAndEven(2)
        //     expect(result).to.equal('even')
        // })

     
        // it('should mark your number as even when 0', () => {
        //     let result = window.checkOddAndEven(0)
        //     expect(result).to.equal('even')
        // })

        // it('should mark your number as invalid when xyz', () => {
        //     let result = window.checkOddAndEven('xyz')
        //     expect(result).to.equal('invalid')
        // })

        // it('should mark your number as invalid when empty string', () => {
        //     let result = window.checkOddAndEven('')
        //     expect(result).to.equal('invalid')
        // })

        // it('should mark your number as invalid when two spaces', () => {
        //     let result = window.checkOddAndEven(' ')
        //     expect(result).to.equal('invalid')
        // })

        // it('should mark your number as invalid when null', () => {
        //     let result = window.checkOddAndEven(null)
        //     expect(result).to.equal('invalid')
        // })

        // it('should mark your number as invalid when undefined', () => {
        //     let result = window.checkOddAndEven(undefined)
        //     expect(result).to.equal('invalid')
        // })
    })

    describe('UI', () => {

        beforeEach(function(){
            document.body.insertAdjacentHTML(
                'afterbegin',
                getFixture());
            evenOddCalculator.initialize()
        })

        afterEach(function(){
            document.body.removeChild(document.getElementById('fixture'));
        })

        it('should mark your button as disabled when input is empty', () => {
            let element = document.getElementById('input-control')
            element.value = ''
            dispatchEvent(element, 'change')
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.true
        })

        it('button should be disabled by default', () => {
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.true           
        })

        it('should mark your button as enabled when input is valid', () => {
            let element = document.getElementById('input-control')
            element.value = '123'            
            dispatchEvent(element, 'change')
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.false
        })

        it('should mark your button as disbled when input is not a number', () => {
            let element = document.getElementById('input-control')
            element.value = 'xyz'            
            dispatchEvent(element, 'change')
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.true
        })
    })

})
