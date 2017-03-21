import React, { Component, PropTypes } from 'react';

// Content component - represents content
export default class Content extends Component {
	render() {
		return (
			<p>{this.props.content.text}</p>
		);
	}
}

Content.propTypes = {
	// This component gets the content to display through a React prop.
	// We can use propTypes to indicate it is required
	content: PropTypes.object.isRequired,
};