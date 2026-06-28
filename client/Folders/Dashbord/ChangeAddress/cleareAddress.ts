type NominatimResponse = {
  address?: {
    state?: string;
    province?: string;
    city?: string;
    town?: string;
    village?: string;
    suburb?: string;
    neighbourhood?: string;
    road?: string;
    residential?: string;
    hamlet?: string;
  };
};

export function formatShortAddress(data: NominatimResponse): string {
  const a = data.address;

  if (!a) return "آدرس نامشخص";

  const province = a.state || a.province;
  const city = a.city || a.town || a.village;

  const parts = [
    province,
    city,
    a.suburb || a.neighbourhood,
    a.road,
    a.residential,
  ];

  return parts.filter(Boolean).join(" / ");
}