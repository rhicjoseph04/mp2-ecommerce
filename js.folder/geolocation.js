document.body.addEventListener("mouseover", function (e) {
    if (e.target.tagName === "BODY") {
      const geolocationContainer = document.getElementById("geolocation-container");
      geolocationContainer.style.display = "block";
    }
  });
  
  document.getElementById("getLocationButton").addEventListener("mouseleave", function () {
    const geolocationContainer = document.getElementById("geolocation-container");
    geolocationContainer.style.display = "none";
  });
  
  function getLocation() {
    if ("geolocation" in navigator) {
      const latitudeSpan = document.getElementById("latitude");
      const longitudeSpan = document.getElementById("longitude");
  
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          latitudeSpan.textContent = latitude;
          longitudeSpan.textContent = longitude;
        },
        function (error) {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not available in this browser.");
    }
  }
  