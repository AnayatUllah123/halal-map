import L from "leaflet";

export const halalMarker = (rating, color = "#16a34a") => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div class="marker-wrapper">
        <div class="marker-bounce" style="background:${color}">
          ⭐ ${rating}
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};