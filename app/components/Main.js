var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function() {
		return (
			<div className="main-container"> 
				<Link to={`/`}>Home</Link>
				{this.props.children}
				

			</div>
		)
	}
});

module.exports = Main;