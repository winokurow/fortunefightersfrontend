import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guild } from "@app/_models/guild";
import { environment } from "@environments/environment";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class GuildService {

    private guildSubject: BehaviorSubject<Guild>
    public guild: Observable<Guild>;

    constructor(private http:HttpClient) {

        this.guildSubject = new BehaviorSubject<Guild>(new Guild());
    }

    public fetchGuild() {
        console.log('fetch')
        return this.http.get<Guild>(`${environment.apiUrl}/api/guild`)
        .pipe(map(guild => {
            console.log("---------" + guild.name)
            this.guildSubject.next(guild);
            return guild;
        }));
    }
    
    public get guildValue(): Guild {
        return this.guildSubject.value;
    }
}