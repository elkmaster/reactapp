export interface HobbiesRedux {
  data: Hobby[];
  loading: boolean;
}

export interface Hobby {
  id: number;
  level: HobbyLevel;
  name: string;
  year: number;
}

export enum HobbyLevel {
  Low,
  Medium,
  Hight,
  VeryHight
}
