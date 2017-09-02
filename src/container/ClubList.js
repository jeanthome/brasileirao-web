import React, {Component} from "react";
import {fetchClubs} from "../actions/ClubActions";
import {connect} from "react-redux";
import ClubCard from "../components/ClubCard";
import {Link} from "react-router-dom";

class ClubList extends Component {
    constructor(props) {
        super(props);
        this.renderClubCard = this.renderClubCard.bind(this);
    }

    componentWillMount() {
        this.props.fetchClubs();
    }

    renderClubCard(club) {
        return (
            <li key={club.identificator}>
                /*TODO Inserir link correto*/
                <Link to="/classificacao">
                    <ClubCard club={club}/>
                </Link>

            </li>
        );
    }

    render() {

        const {clubs} = this.props;

        /* Verifica se já foi dado fetch nos clubes antes de tentar renderizar o formulário */
        if (_.isEmpty(clubs)) {
            return (
                <div className="col-md-6 col-md-offset-3 text-center">
                    Carregando...
                </div>
            );
        }

        console.log(clubs);

        return (

            <div className="row">
                <ul className="club-list">
                    {_.map(clubs, club => this.renderClubCard(club))}
                </ul>
            </div>
        );
    }
}
;

function mapStateToProps(state) {
    return {
        clubs: state.clubs
    }
}

export default connect(mapStateToProps, {fetchClubs})(ClubList);