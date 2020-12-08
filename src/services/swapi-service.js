class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , recived ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse('/people/')
        return res.results
    }

    getPerson(id) {
        return this.getResourse(`/people/${id}`)
    }

    async getAllPlanets() {
        const res = await this.getResourse('/planets/')
        return res.results
    }

    getPlanet(id) {
        return this.getResourse(`/planet/${id}`)
    }

    async getAllStarships() {
        const res = await this.getResourse('/planets/')
        return res.results
    }

    getStarship(id) {
        return this.getResourse(`/planet/${id}`)
    }
}


export default SwapiService;