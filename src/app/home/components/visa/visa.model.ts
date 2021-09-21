export interface Visa {
  name: string;
  icon: string;
  id: Visa['type'];
  type: 'student' | 'work' | 'invest';
  countries: Country[];
}

export interface Country {
  id: string;
  name: string;
  imageUrl: string;
}
