/**The code below will be executed every time a function is called */

function getName () {
    return "John";
}

const getMyName = () => {
    return "McKay Finlayson"
}

const getMyNameAgain = (function() {
    return "McKay Finlayson"
})

const name = getName()
const name2 = getName()
const name3 = getName()
const name4 = getMyName()

function getBookTemplate() {
    return `
    <div>
    </div>
    `
}