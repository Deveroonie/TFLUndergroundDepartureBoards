function getPlatFromLong(text) {
    let words = text.split(" ");
    
    if (words.length > 1) {
      words = [words.pop()];
    } else {
      words = [];
    }
    return words
    }
    function doUpdate(num, r) {
        const dR = new Date(r[num].expectedArrival)
        dR.setHours(dR.getHours() + 1)
        const d = dR.toLocaleTimeString('en-GB', {timeZone: 'GMT'})
        document.getElementById(`eta${num + 1}`).innerText = d
        document.getElementById(`dest${num + 1}`).innerText = r[num].destinationName
        document.getElementById(`plat${num + 1}`).innerText = getPlatFromLong(r[num].platformName)
        document.getElementById(`line${num + 1}`).innerText = r[num].lineName
    }
    window.addEventListener("load", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if(!id) {alert("ID Not found.")}
        console.log("gtf")
    
        axios.get(`https://api.tfl.gov.uk/StopPoint/${id}/Arrivals?cacheBypass=${Math.random()*100000000}`).then(function(res) {
            console.log("gtf")
    
        const r = res.data
        doUpdate(0, r)
        doUpdate(1, r)
        doUpdate(2, r)
        doUpdate(3, r)
        doUpdate(4, r)
        
    })
    })
    