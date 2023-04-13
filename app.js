var copy_drop = () => {
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;
    let starred = document.getElementById("starred").checked ? "★" : "";
    let paintkit = document.getElementById("paintkit").value;
    let stattrak = document.getElementById("stattrak").checked ? " StatTrak™" : "";
    let rarity = String.fromCharCode(eval(document.getElementById("rarity").value));

    let input = document.getElementById("copyinput"); // modified line

    input.value = `playerradio Radio.WePlanted "\u2028\x03\x03${name} \x01has opened a container and found: ${rarity}${starred}${stattrak} ${item} | ${paintkit}"`;

    input.style.display = "block"; // added line
    input.select();
    document.execCommand("copy");

    let copybutton = document.getElementById("copybutton");
    copybutton.innerHTML = "Copied";
    setTimeout(() => {
        copybutton.innerHTML = "Copy unbox message";
        input.style.display = "none";
    }, 3000);
};
var copy_ban = () => {
    let name = document.getElementById("name").value;

    let input = document.getElementById("copyinput"); // modified line

    input.value = `playerradio Radio.WePlanted "\u2028 ${name} has been permanently banned from official CS:GO servers."`;

    input.style.display = "block"; // added line
    input.select();
    document.execCommand("copy");

    let copybutton = document.getElementById("banbutton");
    copybutton.innerHTML = "Copied";
    setTimeout(() => {
        copybutton.innerHTML = "Copy ban message";
        input.style.display = "none";
    }, 3000);
};
