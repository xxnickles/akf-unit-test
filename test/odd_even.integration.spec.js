describe('Integarted test', function () {
    beforeEach(function () {
        document.body.insertAdjacentHTML(
            'afterbegin',
            getFixture());
        evenOddCalculator.initialize()
    })

    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    })

    it('should show even in the screen', () => {
        let inputText = document.getElementById('input-control')
        inputText.value = '1'
        dispatchEvent(inputText, 'change')
        document.getElementById('go-button').click()
       

        let result = document.getElementById('check-result').innerText
        expect(result).to.equal('odd')
    })
})