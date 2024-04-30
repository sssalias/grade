export type MatchDto = {
    match_id: number,
    start_time: number,
    league_name: string,
    duration: number,
    players: PlayerDto[]
}



type PlayerDto = {
    isRadiant: boolean,
    hero_id: number
}