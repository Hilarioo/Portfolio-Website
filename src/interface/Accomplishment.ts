interface Link {
  icon: string;
  url: string;
  name?: string;
}

export interface Certificate {
  id: number;
  title: string;
  url: string;
}


export interface Achievement {
  id: number;
  icon: string;
  title: string;
  image: string;
  description: string;
  bulletpoints: string[];
  links?: Link[];
}

export interface AccomplishmentsInterface {
  achievements: Achievement[];
  certificates: Certificate[];
}


