let selectedButton;

const buttons = document.getElementById('buttons')

buttons.onclick = function (event) {
    let button = event.target.closest('button');
    if (!button) return;
    if (!buttons.contains(button)) return;
    if (selectedButton) {
        closeButton(button)
    } else {
        openButton(button)
    }
}

function openButton(button) {
    selectedButton = button
    selectedButton.classList.add('open-button');
}

function closeButton(button) {
    selectedButton.classList.remove('open-button');
    if (selectedButton !== button) {
        openButton(button)
    } else {
        selectedButton = null
    }
}



