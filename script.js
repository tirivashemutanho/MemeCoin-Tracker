document.getElementById('launchButton').addEventListener('click', function() {
    alert('Prepare for launch! 🚀 MoonGu is taking off!');
    document.body.style.backgroundColor = '#000';
    document.querySelector('header').style.backgroundImage = "url('space-background.jpg')";
});
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });
});
document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('More information coming soon!');
    });
});
function toggleBuyInfo() {
    const buyInfo = document.getElementById('buyInfo');
    if (buyInfo.style.display === 'none' || !buyInfo.style.display) {
        buyInfo.style.display = 'block';
    } else {
        buyInfo.style.display = 'none';
    }
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const button = event.target;
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    });
}

// Add floating effect to the launch button
document.getElementById('launchButton').addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-5px)';
});

document.getElementById('launchButton').addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
});