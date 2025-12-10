// Hide loading screen after 2 seconds
setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
}, 2000);

// Sidebar toggle
const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const home = document.querySelector('.home');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

// Show description based on step
function showDescription(step) {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => {
        desc.style.opacity = '0';
    });
    const activeDesc = document.getElementById(`desc${step}`);
    if (activeDesc) {
        activeDesc.style.opacity = '1';
    }
    // Update active button
    const buttons = document.querySelectorAll('.step-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[step - 1].classList.add('active');
}

// Button functions
function startFreeTrial() {
    window.location.href = 'freetrial.html';
}

function redirectToSignIn() {
    window.location.href = 'signin.html';
}

// Initialize first description
showDescription(1);
