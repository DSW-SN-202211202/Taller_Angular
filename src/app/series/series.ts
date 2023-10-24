
//create class serie
export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  webpage: string;
  poster: string;
  description: string;

  constructor(id: number, name: string, seasons: number, channel: string, description: string, webpage: string, poster: string) {
      this.id = id;
      this.name = name;
      this.seasons = seasons;
      this.channel = channel;
      this.description = description;
      this.webpage = webpage;
      this.poster = poster;
  }

}
