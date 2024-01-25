// frontend/script.js
document.getElementById('generateBtn').addEventListener('click', async () => {
    const response = await fetch('/generate-password');
    const data = await response.json();
    document.getElementById('passwordDisplay').innerText = `Generated Password: ${data.password}`;
});
