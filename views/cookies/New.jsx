const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Cookie'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/cookies' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Color: < input type="text" name="color"/> <br />
                    Quantity: <input type="text" name="quantity"/><br/>
                    Is Ready to Eat: <input type="checkbox" name="readyToEat"/> <br />
                    <input type="submit" name="" value="Create Cookie"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;