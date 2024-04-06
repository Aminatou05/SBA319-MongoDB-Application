class Show extends React.Component {
    render() {
        const cookie = this.props.cookie;

        return (
            <DefaultLayout title="Show an Individual Cookie">
                <p>The {cookie.name} is {cookie.color} and {cookie.quantity}</p>
                {cookie.readyToEat ? 'It is ready to eat' : "NOT READY!"}
                <br />
                <a href={`/cookies/${cookie._id}/edit`}>Edit This Cookie</a>
                <form action={`/cookies/${cookie._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/cookies">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;