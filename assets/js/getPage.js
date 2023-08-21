function getPlatFromLong(text) {
    let words = text.split(" ");
    
    if (words.length > 1) {
      words = [words.pop()];
    } else {
      words = [];
    }
    return words
    }
    function doUpdate(r) {
        
        const table = document.getElementById("table")
        const tr = document.createElement("tr")






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
        console.log(r)

        r.forEach(function callback(e, i) { //e -> array item, i -> array index
          
          const table = document.getElementById("table")
          const tr = document.createElement("tr")


          const dR = new Date(e.expectedArrival)
          dR.setHours(dR.getHours() + 1)
          const d = dR.toLocaleTimeString('en-GB', {timeZone: 'GMT'})
          const eta = document.createElement("td")
          eta.id = `eta${i+1}`
          eta.innerText = d
          tr.appendChild(eta)

          const dest = document.createElement("td")
          dest.id = `dest${i+1}`
          dest.innerText = e.destinationName;
          tr.appendChild(dest)

          const plat = document.createElement("td")
          plat.id = `plat${i+1}`
          plat.innerText = e.platformName
          tr.appendChild(plat)

          const line = document.createElement("td")
          line.id = `line${i+1}`
          line.innerText = e.lineName
          tr.appendChild(line)

          table.appendChild(tr)
        })
        
    })
    })
    