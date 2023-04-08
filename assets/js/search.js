document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault()
    const st = document.getElementById("search").value;
    axios.get(`https://api.tfl.gov.uk/StopPoint/Search/${st}`).then(function(res) {
        const r = res.data
        if(r.total = 0 || !r.matches) {
        alert("Unable to find station.") 
        document.getElementById("search").value = ""
    }
        const dataArray = Object.values(r.matches);
        let found = false;
        let id;
        dataArray.forEach(l => {
            console.log("a")
            if(found == false) {
                l.modes.forEach(m => {
                    if(m == "elizabeth-line" || m == "tube") {
                        found = true
                        id = l.id;
                        window.location.assign(`/get.html?id=${id}`)
                    }
                })
            } else return;
        })
    })
})