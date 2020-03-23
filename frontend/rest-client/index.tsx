import fetch from 'isomorphic-unfetch';
import {
  GetBesuchByFilterInput,
  GetBesuchByFilterResponse,
  GetBesucherByFilterInput,
  SetBesuchEndzeitpunktInput,
  RegisterBesucherInput,
  RegisterBesuchInput,
} from '../types';

function fetcher(baseURL: string) {
  async function fetchRessource(
    url: string,
    fetchOptions?: object
  ): Promise<any> {
    const u = `${baseURL}${url}`;
    try {
      const xhr = await fetch(u, fetchOptions);
      if (xhr.ok) return xhr.json();
      throw new Error(
        `Unexpected error during fetch of URL ${u}: ${JSON.stringify(xhr)}`
      );
    } catch (error) {
      throw new Error(`Unexpected error during fetch of URL ${u}: ${error}`);
    }
  }
  return fetchRessource;
}

export default class RestClient {
  fetcher: (url: string, options?: any) => Promise<any>;
  constructor(url: string) {
    this.fetcher = fetcher(url);
  }
  async login(props: { email: string; password: string }) {
    return this.fetcher(`Auth/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });
  }
  async register(props: {
    sicherheitsfrage: string;
    rolle: string;
    person: { name: string; vorname: string; email: string; telefon: string };
  }) {
    return this.fetcher(`Auth/Register`, {
      method: 'POST',
      hedaders: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });
  }
  async postBesuch(props: { besucher: Array<number>; raeume: Array<number> }) {
    return this.fetcher(`Besuch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });
  }
  async setBesuchEndzeitpunkt(input: SetBesuchEndzeitpunktInput) {
    return this.fetcher(`Besuch/SetEndzeitpunkt`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/jsoon',
      },
      body: JSON.stringify(input),
    });
  }
  async getBesuchByFilter(
    input: GetBesuchByFilterInput
  ): Promise<GetBesuchByFilterResponse> {
    return this.fetcher(`Besuch/GetByFilter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
  }
  async getBesucherByFilter(input: GetBesucherByFilterInput): Promise<any> {
    return this.fetcher(`Besucher/ByFilter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
  }
  async registerBesucher(input: RegisterBesucherInput) {
    return this.fetcher(`Besucher`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
  }
  async registerBesuch(input: RegisterBesuchInput) {
    return this.fetcher(`Besuch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
  }
  async getGebauede() {
    return this.fetcher(`Gebaeude`, {
      method: 'GET',
    });
  }
}
