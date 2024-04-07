class Show extends React.Component {
    render() {
        const user = this.props.user;

        return (
            <DefaultLayout title="Show an Individual User">
                <p>The {user.name} is {user.email} and {user.age} years old</p>
                {user.readyToEat ? 'It is ready to eat' : "NOT READY!"}
                <br />
                <a href={`/users/${user._id}/edit`}>Edit This User</a>
                <form action={`/users/${user._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/users">Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;
