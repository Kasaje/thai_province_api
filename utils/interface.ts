export interface Iprovince {
  id: number;
  name: string;
}

export interface Idistrict {
  id: number;
  provinceID: number;
  nameTH: string;
  nameEN: string;
}

export interface IsubDistrict {
  id: number;
  districtID: number;
  nameTH: string;
  nameEN: string;
  zipCode: string;
}
