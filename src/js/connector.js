
console.log("Trello test power up");
window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        return []
    },
    'card-buttons': function(t, options){
        return [{
          icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
          text: 'Estimate Size',
          callback: onBtnClick,
        },
        {
            icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
            text: 'Burn Down Chart',
            callback: function(t){
              return t.popup({
                title: "Burn Down Chart",
                url: 'chart.html'
              });
            }
          }
    ];
    },
});

var onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
    t.popup({
        type: 'confirm',
        title: 'confirm',
        message: 'confirm',
        confirmText: 'confirm',
        onConfirm: function(t1, opts) { 
            console.log("confirmed") 
        } ,
        confirmStyle: 'primary',
        cancelText: "Calcel",
        onCancel: function(t, opts){
            console.log("Canceled") 
        },
      })
  };
  