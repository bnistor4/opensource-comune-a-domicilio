import {connect} from "react-redux";
import {TextBox} from "./Textbox";
import SearchIcon from "@material-ui/icons/Search";
import React, {Component} from "react";
import {searchKey} from "../reducers/activities/selectors";
import {searchKeyChanged} from "../reducers/activities/actions";
import CloseIcon from '@material-ui/icons/Close';

class SearchBox extends Component {

    searchKeyChanged(value) {
        this.props.searchKeyChanged(value)
    }

    render() {
        return (
            <TextBox
            className={'search'}
            icon={this.props.searchValue.length>0?<CloseIcon onClick={() => this.searchKeyChanged("")}/>:<SearchIcon/>}
            placeholder={"Di cosa hai bisogno?"}
            onChange={(e) => this.searchKeyChanged(e.target.value)}
            onKeyDown={(e) => this.searchKeyChanged(e.target.value)}
            value={this.props.searchValue}
        />)
    }
}

const mapStateToProps = (state, props) => ({
    searchValue: searchKey(state)
});
const mapDispatchToProps = {
    searchKeyChanged
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

