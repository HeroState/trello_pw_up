
console.log("Trello test power up");
window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return []
    }
});