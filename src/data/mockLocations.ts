import type { LocationPoint } from "../types/mobility.types";

export const mockLocations: LocationPoint[] = [
  { id: "sangam", name: "Sangam Ghat", type: "ghat", lat: 25.4254, lng: 81.8826 },
  { id: "arail", name: "Arail Ghat", type: "ghat", lat: 25.4018, lng: 81.8785 },
  { id: "jhusi", name: "Jhusi", type: "landmark", lat: 25.4371, lng: 81.9051 },
  { id: "civil-lines", name: "Civil Lines", type: "landmark", lat: 25.456, lng: 81.8332 },
  { id: "junction", name: "Prayagraj Junction", type: "station", lat: 25.4456, lng: 81.825 },
  { id: "naini-bridge", name: "Naini Bridge", type: "bridge", lat: 25.4058, lng: 81.8599 },
  { id: "sector-4-parking", name: "Sector 4 Parking", type: "parking", lat: 25.4328, lng: 81.8571 },
  { id: "sector-7-parking", name: "Sector 7 Parking", type: "parking", lat: 25.4141, lng: 81.8439 },
  { id: "parade-ground", name: "Parade Ground", type: "landmark", lat: 25.4524, lng: 81.8494 },
  { id: "hanuman-mandir", name: "Hanuman Mandir", type: "landmark", lat: 25.4318, lng: 81.8766 }
];
