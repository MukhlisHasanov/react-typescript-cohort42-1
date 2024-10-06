export interface ApiUniversity {
  "state-province": string | null;
  web_pages: string[];
  name: string;
  country: string;
  domains: string[];
}
export interface University extends ApiUniversity {
  id: string;
}
