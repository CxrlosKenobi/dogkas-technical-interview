//
export interface ApiResult {
  data: IService[];
}

export interface IService {
  id: number;
  service_name: string;
  person_name: string;
  latitude: string;
  longitude: string;
}
