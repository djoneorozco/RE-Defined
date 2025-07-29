// types/index.ts

export type Persona = {
  id: string;
  name: string;
  mbti: string;
  zodiac: string;
  quadrant: string;
  avatar: string;
  quote?: string;
  online: boolean;
};

export type Message = {
  id: string;
  from: "user" | "avatar";
  content: string;
  timestamp: string;
};
