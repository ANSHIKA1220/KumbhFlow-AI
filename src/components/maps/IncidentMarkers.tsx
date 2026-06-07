import { Marker, Popup } from "react-leaflet";
import { mockLocations } from "../../data/mockLocations";
import type { Alert } from "../../types/alert.types";

export function IncidentMarkers({ alerts }: { alerts: Alert[] }) {
  return (
    <>
      {alerts.slice(0, 4).map((alert) => {
        const location = mockLocations.find((item) => item.id === alert.locationId);
        if (!location) return null;
        return (
          <Marker key={alert.id} position={[location.lat, location.lng]}>
            <Popup>
              <strong>{alert.title}</strong>
              <br />
              {alert.message}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
