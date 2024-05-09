export type MatchDto = {
    match_id: number,
    start_time: number,
    league_name: string,
    duration: number,
    players: PlayerDto[]
}



export type PlayerDto = {
    isRadiant: boolean,
    hero_id: number,
    win: number,
    personaname: string,
    level: number,
    kills: number,
    deaths: number,
    assists: number,
    last_hits: number,
    denies: number,
    gold: number,
    gold_per_min: number,
    xp_per_min: number,
    hero_damage: number,
    tower_damage: number,
    hero_healing: number
}