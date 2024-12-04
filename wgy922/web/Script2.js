document.addEventListener('DOMContentLoaded', function() {
    var curcontent = document.getElementById('section2');
    curcontent.style.maxHeight = curcontent.scrollHeight + 'px';
});

window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const target = document.getElementById(targetId);
            if (target.style.maxHeight === '0px' || target.style.maxHeight === '') {
                target.style.maxHeight = target.scrollHeight + "px";
            } else {
                target.style.maxHeight = '0px';
            }
        });
    });
});