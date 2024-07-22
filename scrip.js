let currentStep = 0;

function showStep(step) {
    const steps = document.querySelectorAll('.carousel-step');
    const dots = document.querySelectorAll('.dot');

    steps.forEach((stepElement, index) => {
        if (index === step) {
            stepElement.classList.add('active');
            stepElement.style.display = 'block';
        } else {
            stepElement.classList.remove('active');
            stepElement.style.display = 'none';
        }
    });

    dots.forEach((dot, index) => {
        if (index === step) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextStep() {
    const steps = document.querySelectorAll('.carousel-step');
    currentStep = (currentStep + 1) % steps.length;
    showStep(currentStep);
}

function prevStep() {
    const steps = document.querySelectorAll('.carousel-step');
    currentStep = (currentStep - 1 + steps.length) % steps.length;
    showStep(currentStep);
}

function goToStep(step) {
    currentStep = step;
    showStep(currentStep);
}

document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
    
    // Add event listeners to dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToStep(index);
        });
    });
});
