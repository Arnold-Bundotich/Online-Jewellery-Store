document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.slider');
    const instances = M.Slider.init(elems, { indicators: true, fullWidth: true, height: 500 });
})