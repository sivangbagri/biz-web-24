export interface Timeline {
  time: string;
  activity: string;
}

export interface Contact {
  name: string;
  email?: string;
  phone: string;
}

export interface Event {
  id: string;
  name: string;
  image: string;
  summary: string;
  description: string;
  prizeMoney: string;
  registrationLink: string;
  problemStatementLink: string;
  contacts: Contact[];
} 