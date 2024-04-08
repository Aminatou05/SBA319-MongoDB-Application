const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const candy = this.props.candy;

        return (
            <DefaultLayout title="Show an Individual Candy">
                <p>The {candy.name} is {candy.color} {candy.quantity}</p>
                {candy.readyToEat ? 'It is ready to eat' : "NOT READY!"}
                <br />
                <a href={`/candies/${candy._id}/edit`}>Edit This Candy</a>
                <form action={`/candies/${candy._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/candies">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;