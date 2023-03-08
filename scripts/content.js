
let reload = false

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's' && window.location.pathname.startsWith('/write') && window.location.search.startsWith("?")) {
      e.preventDefault();
      document.querySelector('button[color="teal"]').click();
      sleep(200);
      document.querySelector('button[data-testid="publish"]').click();
      reload = true
    }
});

setInterval(() => {
    if(window.location.pathname.startsWith('/@ilov1112') && reload === true) {
        if(document.getElementsByClassName('head-wrapper')[0].getElementsByTagName('div')[0].getElementsByTagName('button')[1] != undefined) {
            reload = false
            document.getElementsByClassName('head-wrapper')[0].getElementsByTagName('div')[0].getElementsByTagName('button')[1].click()
        }
    }
}, 100)
