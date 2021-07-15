import { Component } from '@angular/core';
import { Guild } from '@app/_models/guild';
import { GuildService } from '@app/_services/guild.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    guild: Guild;

    constructor(private guildService: GuildService) {
        this.guildService.fetchGuild().subscribe(responseData => this.guild = responseData);
        this.guild = this.guildService.guildValue;
    }
}