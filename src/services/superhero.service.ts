import HttpService from "./http.service";
import { AxiosRequestConfig } from 'axios';
import Superhero from "../entities/superhero.entity";
import { APP_KEYS } from '../modules/common/consts';
import superheroForm from "./superhero.form";

class SuperheroService {
    constructor() {
        this.service = new HttpService(APP_KEYS.QUERY_KEYS.BASE_URL);
    }
    async getAll() {
        const config: AxiosRequestConfig = {};
        config.url = APP_KEYS.QUERY_KEYS.SUPERHEROES_URL;
        const response = await this.service.get(config);
        const superheros = response.data as Array<Superhero>;
        return superheros;
    }
    async getOne(id: number) {
        const config: AxiosRequestConfig = {};
        config.url = APP_KEYS.QUERY_KEYS.SUPERHEROES_URL + id;
        const response = await this.service.get(config);
        const superhero = await response.data as Superhero;
        return superhero;
    }
    create(superhero: Superhero) {
        const config: AxiosRequestConfig = {};
        config.headers = {
            "Content-Type": 'multipart/form-data'
        }

        config.url = APP_KEYS.QUERY_KEYS.SUPERHEROES_URL;
        const form = superheroForm(superhero);

        config.data = form;
        return this.service.post(config);
    }
    delete(id: number) {
        const config: AxiosRequestConfig = {};
        config.url = APP_KEYS.QUERY_KEYS.SUPERHEROES_URL + id;
        return this.service.delete(config);
    }
    update(superhero: Superhero, id: number) {
        const config: AxiosRequestConfig = {};
        config.headers = {
            "Content-Type": 'multipart/form-data'
        }
        config.url = APP_KEYS.QUERY_KEYS.SUPERHEROES_URL + id;
        console.log(config.url);
        superhero.images = [];
        console.log(superhero);
        const form = superheroForm(superhero);

        config.data = form;
        
        return this.service.put(config);
    }
    public service: HttpService;
}

const superheroService = new SuperheroService();

export default superheroService;