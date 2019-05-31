import React from "react";
import Footer from "../Footer";

function Rules() {
    return(
        <div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12 text-center">
                    <h3 className="pb-3 border-bottom text-secondary">G E N E R A L <span className="text-warning">R U L E S</span></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ul className="list-group">
                        <li className="list-group-item rounded-0 border-0 font-weight-bold">
                            Players will be required to attend worship services on Sundays during the season. The captain of each team will be monitored by the league to enforce this rule.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            6 game season with single elimination playoffs. <span className="font-weight-bold">Top 4 teams will make the playoffs.</span>
                        </li>
                        <li className="list-group-item border-0">
                            Players must participate in at least <span className="font-weight-bold">3 games</span> throughout the regular season in order to become eligible to participate in the playoffs.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            League fees must be paid before the start of the season.
                        </li>
                        <li className="list-group-item border-0">
                            Players must bring league jerseys each game or the team will be assessed a technical foul.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            Violence and profanity will not be tolerated.
                        </li>
                        <li className="list-group-item rounded-0 border-0">
                            Any person who disrespects fellow players, referees, or league staff will be subject to a ban from the league.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 text-center">
                    <h3 className="pb-3 border-bottom text-secondary">G A M E <span className="text-warning">R U L E S</span></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ul className="list-group">
                        <li className="list-group-item rounded-0 border-0">
                            Games will consist of two 20 minute halves. The clock will stop on all fouls and violations only during the last two minutes of the second half. The clock will not stop if a team is ahead by 10 points or more. Games will be played with 3 minute half times.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            All jewelry and accessory must be removed prior to tip-off. An automatic technical foul will be assessed on any player who enters the court with any of these items on their person. Game clock will start regardless of this technical foul being assessed at the beginning of a game.
                        </li>
                        <li className="list-group-item border-0">
                            No cursing during games. The cursing violation will result in an individual technical foul (also counting against the player’s person foul allotment) for the offender and an automatic benching of that player for the rest of a game.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            All technical fouls count as both a personal foul and a team foul. <span className="font-weight-bold">An automatic benching for five minutes is given to a player that commits a technical foul.</span>
                        </li>
                        <li className="list-group-item border-0">
                            All players are allowed five personal fouls before having to sit for the rest of a game. Two technical fouls within one game will result in an ejection and a one game suspension.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            All players substituting into the game must report to the scores table.
                        </li>
                        <li className="list-group-item border-0">
                            Each team is allowed 3 timeouts per game – unused TO’s do carry over to 2nd half
                        </li>
                        <li className="list-group-item bg-light border-0">
                            Overtime results in a two minutes of extra game time and time stoppage will occur below the one minute mark. Each team receives one timeout during overtime with no carryover from regulation. The game will end in a tie after the overtime period has been played.
                        </li>
                        <li className="list-group-item border-0">
                            The seventh team foul will start the one-and-one bonus. Two-shot bonus will start from the tenth team foul.
                        </li>
                        <li className="list-group-item bg-light border-0">
                            Free throws will be on the release, and all players behind the free throw line must wait until the ball hits the rim.
                        </li>
                        <li className="list-group-item rounded-0 border-0">
                            Fighting is absolutely prohibited. Any player involved in a fight will be subject to a ban from the league.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Rules;