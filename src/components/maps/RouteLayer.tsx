import { Polyline } from "react-leaflet";
import { mockLocations } from "../../data/mockLocations";

export function RouteLayer({ route, color = "#42d9d2" }: { route?: { roadIds: string[] }; color?: string }) {
  if (!route) return null;
  const points = route.roadIds
    .map((id) => mockLocations.find((location) => location.id === id))
    .filter(Boolean)
    .map((location) => [location!.lat, location!.lng] as [number, number]);
  return <Polyline positions={points} pathOptions={{ color, weight: 6, dashArray: "8 8" }} />;
}
