import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class TitleService {
    emitChange$: Subject<any> = new BehaviorSubject<any>(null);
    constructor() { }
    emit(value: any) {
        this.emitChange$.next(value);
    }
    get emitChange(): BehaviorSubject<any> {
        return (this.emitChange$ as BehaviorSubject<any>);
    }
}