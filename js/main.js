const openPopUpCallHeader = document.getElementById('open_pop_up_callheader');
const openPopUpCall = document.getElementById('open_pop_up_call');
const popUpCall = document.getElementById('pop_up_call');
const popUpCloseCall = document.getElementById('pop_up_closeCall');

openPopUpCall.addEventListener('click', function(e) {
    e.preventDefault();
    popUpCall.classList.add('active');
})
openPopUpCallHeader.addEventListener('click', function(e) {
    e.preventDefault();
    popUpCall.classList.add('active');
})

popUpCloseCall.addEventListener('click', () => {
    popUpCall.classList.remove('active');
})