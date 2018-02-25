var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This page was created by Patrick Mattei as part of the Udemy React Web Dev Course.<br />Check it out on <a href="https://github.com/PatMattei/Udemy-React-WeatherApp">Github</a>.</p>
			<p>Here are some resources I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search weather data by city name.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;