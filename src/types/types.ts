export interface Person {
  name: string;
  height: number;
  mass: number;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  url: string;
}

export interface PeopleTableRowProps {
  data: Person;
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

export interface CharacterDetails {
  name: string;
  gender: string;
  homeworld: string;
  films: string[];
  vehicles: string[];
}
