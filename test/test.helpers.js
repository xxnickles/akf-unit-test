 // the sintax bellow is es6 and it doesn't work on IE
function getFixture() {
    return `
    <div id='fixture'>
        <div id='input-container'>
            <input type="text" id='input-control'>
            <button id="go-button"><span>Go</span></button>
            <p id="check-result"></p>
        </div>
    </div>`
}

function dispatchEvent(element, event){           
    element.dispatchEvent(new Event(event, { 'bubbles': true }))
}