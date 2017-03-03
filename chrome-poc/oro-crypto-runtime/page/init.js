/**
 * Created by nayana on 3/3/17.
 */



//onLoad='set_1024f4();'
//onClick='rng_seed_time();' onKeyPress='rng_seed_time();'

document.body.onload = function() {
    chrome.storage.sync.get("data", function(items) {
        if (!chrome.runtime.error && items.data !== undefined) {
            document.getElementById("createWallet").style.display = "none";
            document.getElementById("waddr").innerText = items.data;
        } else {
            document.getElementById("login-form").style.display = "block";
            document.getElementById("newWallet").style.display = "none";
        }
    });

    document.getElementById("login-btn").addEventListener("click", function() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("newWallet").style.display = "block";
    });

    document.getElementById("createWallet").addEventListener("click", function() {
        createWallet(function (d) {
            document.getElementById("waddr").innerText = d;
            chrome.storage.sync.set({ "data" : d }, function() {
                if (chrome.runtime.error) {
                    console.log("Runtime error.");
                }
            });
        });

    });

};


function createWallet(cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.oro.world/wallet.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            cb(xhr.responseText);
        }
    };
    xhr.send();
}