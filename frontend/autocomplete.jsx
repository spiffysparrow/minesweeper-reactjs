var React = require("react");

var Autocomplete = React.createClass({
  getInitialState: function() {
    return { searchString: "" };
  },

  handleChange: function(e) {
    this.setState({ searchString: e.target.value });
  },

  handleClick: function(e) {
    this.setState({ searchString: e.target.innerHTML });
  },

  getListItems: function() {
    var items = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      items = items.filter(function(item) {
        return item.toLowerCase().match(searchString);
      });
    } else {
      items = [];
    }

    var listItems = items.map(function(item){
      return (
        <li key={item} onClick={this.handleClick}>
          <a href="#">{item}</a>
        </li>
      );
    }.bind(this));

    return listItems;
  },

  render: function(){
    return (
      <div id="autocomplete">
        <input type="text"
          onChange={this.handleChange}
          value={this.state.searchString}></input>
        <ul>
          {this.getListItems()}
        </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
