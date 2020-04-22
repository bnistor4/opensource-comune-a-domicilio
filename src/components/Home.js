import React, {Component} from 'react';
import {connect} from "react-redux";
import {getActivities} from "../reducers/activities/actions";
import {activitiesFiltered} from "../reducers/activities/selectors";
import {Header} from "./Header";
import SearchBox from "./SearchBox";
import history from "../history";
import {Category} from "./Category";
import {ADD_ACTIVITY_URL} from "../constants";
import {
    Link
} from "react-router-dom";

class Home extends Component {

    componentDidMount() {
        this.props.getActivities();
    }

    render() {
        return (
            <div>
                <Header button_title={"Info sul progetto"} button_action={() => history.push("/info")}>
                    <SearchBox />
                </Header>
                <div className="Home">
                    <div className="container">
                        <nav className="buttons">
                            <Link to={'info'}>
                                <button className="btn btn-gray">A proposito dell'iniziativa</button>
                            </Link>
                            <a className="btn btn-primary" target="_blank" rel='noopener noreferrer' href={ADD_ACTIVITY_URL}>Aggiungi un'attività</a>
                        </nav>
                        <div className={'content'}>
                            <div className={"categories"}>
                                {
                                    this.props.activities.length > 0 ?
                                        this.props.activities
                                            .map(g => (
                                                <Category
                                                    key={g.key}
                                                    name={g.key}
                                                    category={g.items}
                                                />
                                            )):
                                        (
                                            <div className={'empty-state'}>
                                                <span role="img" aria-label="sad-face">🙁</span> Nessun risultato.
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state, props) => ({
    activities: activitiesFiltered(state)
});
const mapDispatchToProps = {
    getActivities
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);

