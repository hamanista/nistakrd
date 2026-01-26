// تایمەر و سڵاو
function updateInterface() {
    const now = new Date();
    const hours = now.getHours();
    const timeStr = now.toLocaleTimeString('en-GB'); // کاتژمێر
    
    document.getElementById('digital-clock').innerText = timeStr;
    
    let greet = "بەخێربێیت";
    if (hours < 12) greet = "بەیانیت باش ☀️";
    else if (hours < 18) greet = "نیوەڕۆت باش 🌤️";
    else greet = "ئێوارەت باش 🌙";
    
    document.getElementById('greeting').innerText = greet;
}

setInterval(updateInterface, 1000);
updateInterface();

// --- سیکیورێتی ---
// ڕێگری لە کلیکی ڕاست
document.addEventListener('contextmenu', e => e.preventDefault());

// ڕێگری لە شەرتکەتەکانی کیبۆرد (Inspect Element)
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};
