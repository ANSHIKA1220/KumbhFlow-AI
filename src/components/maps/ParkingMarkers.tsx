import { CircleMarker, Popup } from "react-leaflet";
import { mockLocations } from "../../data/mockLocations";
import type { ParkingRecommendation } from "../../types/parking.types";

export function ParkingMarkers({ lots }: { lots: ParkingRecommendation[] }) {
  return (
    <>
      {lots.map((lot) => {
        const location = mockLocations.find((item) => item.id === lot.locationId);
        if (!location) return null;
        return (
          <CircleMarker key={lot.id} center={[location.lat, location.lng]} radius={8 + lot.occupancyPct / 10} pathOptions={{ color: lot.occupancyPct > 82 ? "#f65d4e" : "#5ca8ff", fillColor: lot.occupancyPct > 82 ? "#f65d4e" : "#5ca8ff", fillOpacity: 0.8 }}>
            <Popup>
              <strong>{lot.name}</strong>
              <br />
              Occupancy {lot.occupancyPct}%
              <br />
              Full in {lot.predictedFullInMin} min
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
}
