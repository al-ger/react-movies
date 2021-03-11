import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: '',
    };
    handleKey = (event) => {
        if (event.onKeyDown === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    };
    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovie(this.state.search, this.state.type);
            }
        );
    };
    render() {
        return (
            <div class="row">
                <div class="input-field ">
                    <input
                        id="Search"
                        placeholder="Search"
                        type="Search"
                        class="validate"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        class="btn search-btn"
                        onClick={() =>
                            this.props.searchMovie(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>{' '}
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series Only</span>
                </label>
            </div>
        );
    }
}
export { Search };
