function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById('digital-clock').innerText = timeStr;
    
    const hours = now.getHours();
    let greet = "";
    if (hours >= 5 && hours < 12) greet = "بەیانیت باش ☀️";
    else if (hours >= 12 && hours < 18) greet = "نیوەڕۆت باش 🌤️";
    else if (hours >= 18 && hours < 22) greet = "ئێوارەت باش 🌙";
    else greet = "شەوت شاد ✨";
    
    document.getElementById('greeting').innerText = greet;
}

setInterval(updateClock, 1000);
updateClock();

// سیکیورێتی
document.addEventListener('contextmenu', e => e.preventDefault());
