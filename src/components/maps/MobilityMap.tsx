import { MapContainer, TileLayer } from "react-leaflet";
import { PRAYAGRAJ_CENTER } from "../../utils/constants";
import type { MobilitySnapshot } from "../../types/mobility.types";
import type { Alert } from "../../types/alert.types";
import type { ParkingRecommendation } from "../../types/parking.types";
import { HeatmapLayer } from "./HeatmapLayer";
import { IncidentMarkers } from "./IncidentMarkers";
import { MapLegend } from "./MapLegend";
import { ParkingMarkers } from "./ParkingMarkers";
import { RouteLayer } from "./RouteLayer";

export function MobilityMap({ snapshots, alerts, parkingLots, route }: { snapshots: MobilitySnapshot[]; alerts: Alert[]; parkingLots: ParkingRecommendation[]; route?: { roadIds: string[] } }) {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-xl border border-white/10">
      <MapContainer center={PRAYAGRAJ_CENTER} zoom={12} scrollWheelZoom={false}>
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <HeatmapLayer snapshots={snapshots} />
        <ParkingMarkers lots={parkingLots} />
        <IncidentMarkers alerts={alerts} />
        <RouteLayer route={route} />
      </MapContainer>
      <MapLegend />
    </div>
  );
}
