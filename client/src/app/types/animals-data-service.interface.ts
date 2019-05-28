import { Observable } from 'rxjs';

export interface DataService {
    save: <T>(path: string, data: T) => Observable<T>;
    get: <T>(path: string) => Observable<T[]>;
    delete: <T>(path: string, data: string) => Observable<T>;
}
