  // Clock display in header
  function refreshTime() {
    let time = document.getElementById("time");
    let timeString = new Date().toLocaleString();
    let dateTimeString = timeString.replace(", ", " - ");
    time.textContent = dateTimeString;
}
    setInterval(refreshTime, 1000);

function valShipment(){
    let shipmentNumber = document.getElementById("link");
    let loadStatus = document.getElementById("status");
    let hours = document.getElementById("hours");
    let carrier = (document.getElementById("carrier").value);
    let miles = document.getElementById("miles");
    let puAppt = new Date(document.getElementById("pickAppt").value);
    let aPickUp= new Date (document.getElementById("actualPickUp").value);
    let puDepart = new Date (document.getElementById("pickUpDeparture").value);
    let delAppt = new Date (document.getElementById("deliverAppt").value);
    let aDelivery = new Date (document.getElementById("actualDelivery").value);
    let dDeparture = new Date (document.getElementById("deliveryDeparture").value);
    let currentTime = new Date ();
    let ctpt =  (currentTime.getTime()-puAppt.getTime());
    let ctapt =  (currentTime.getTime()-aPickUp.getTime());
    let ctdpt =  (currentTime.getTime()-puDepart.getTime());
    let ctda =  (currentTime.getTime()-delAppt.getTime());
    let ctad =  (currentTime.getTime()-aDelivery.getTime());
    

    loadStatus.classList.remove("greenLight");
    loadStatus.classList.remove("redLight");
       
    if ((carrier === "")&& (puAppt.getTime() - currentTime.getTime()) < 14400000){
        document.getElementById("status").innerText = "NC";
        hours.textContent = ctpt.toLocaleString();
        loadStatus.classList.add("redLight");
        alert("Need Carrier")
    }
    else if (isNaN(aPickUp) && (ctpt > 300000)) {
        document.getElementById("status").innerText = "AP";
        loadStatus.classList.add("redLight");
        alert("Need Actual Pickup Time")
    }
    else if (isNaN(puDepart) && (ctapt > 7200000)){
        document.getElementById("status").innerText = "PD";
        loadStatus.classList.add("redLight");
        alert("Need Pick Up Departure Time")
    }
    else if (isNaN(delAppt) && (ctdpt > 300000)){
        document.getElementById("status").innerText = "DA";
        loadStatus.classList.add("redLight");
        alert("Need a Delivery Appointment Time")
    }
    else if (isNaN(aDelivery) && (ctda > 300000)){
        document.getElementById("status").innerText = "DT";
        loadStatus.classList.add("redLight");
        alert("Need a Actual Delivery Time")
    }
    else if (isNaN(dDeparture) && (ctad > 7200000)){
        document.getElementById("status").innerText = "DD";
        loadStatus.classList.add("redLight");
        alert("Need a Delivery Departure Time")
    }
    else{
        document.getElementById("status").innerText = "GO";
        loadStatus.classList.add("greenLight");
        alert("Everything is Good")
    }
  
}
