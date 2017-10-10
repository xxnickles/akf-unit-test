describe('Calculate whether a number is odd and even', () => {

    describe('Logic', () => {
        it('should mark your number as odd', () => {
            let result = window.checkOdd(1)
            expect(result).to.be.true
        })

        it('should mark your number as even', () => {
            let result = window.checkEven(2)
            expect(result).to.be.true
        })
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

        it('should mark your button as disble when input is empty', () => {
            document.getElementById('input-control').value = ''
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.true
        })

        it('button should be disabled by default', () => {
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.true           
        })

        it('should mark your button as enabled when input is valid', () => {
            document.getElementById('input-control').value = '123'
            let buttonDisabled = document.getElementById('go-button').disabled
            expect(buttonDisabled).to.be.false
        })

        it('should mark your button as disbled when input is not a number', () => {
            assert(false === true)
        })

        // the sintax bellow is es6 and it doesn't work on IE
        function getFixture() {
            return `
            <div id='fixture'>
                <div id='input-container'>
                    <input type="text" id='input-control'>
                    <button id="go-button"><span>Go</span></button>
                </div>
            </div>`
        }
    })

})