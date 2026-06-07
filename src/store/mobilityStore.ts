import { create } from "zustand";
import type { GroupType, RankedRoute, TravelMode } from "../types/route.types";
import type { ParkingRecommendation } from "../types/parking.types";

type MobilityStore = {
  routeInput: { startId: string; destinationId: string; groupType: GroupType; mode: TravelMode };
  rankedRoutes: RankedRoute[];
  parkingRecommendations: ParkingRecommendation[];
  setRouteInput: (routeInput: MobilityStore["routeInput"]) => void;
  setRankedRoutes: (rankedRoutes: RankedRoute[]) => void;
  setParkingRecommendations: (parkingRecommendations: ParkingRecommendation[]) => void;
};

export const useMobilityStore = create<MobilityStore>((set) => ({
  routeInput: { startId: "civil-lines", destinationId: "sangam", groupType: "family", mode: "mixed" },
  rankedRoutes: [],
  parkingRecommendations: [],
  setRouteInput: (routeInput) => set({ routeInput }),
  setRankedRoutes: (rankedRoutes) => set({ rankedRoutes }),
  setParkingRecommendations: (parkingRecommendations) => set({ parkingRecommendations })
}));
