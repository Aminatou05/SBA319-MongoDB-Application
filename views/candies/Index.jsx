const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { candies } = this.props;
        // const fruits = this.props.fruits;

        return (
            <DefaultLayout title={"Candies Index Page"}>
                <nav>
                    <a href="/candies/new">Create a New Candy</a>
                </nav>
                <ul>
                    {candies.map((candy, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/candies/${candy._id}`}>
                                    {candy.name}
                                </a> {' '}
                                is {candy.color} {candy.quantity} <br></br>
                                {candy.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            <a href={`/candies/${candy._id}/edit`}>Edit This Candy</a>
                            <form action={`/candies/${candy._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;