//candies/Edit.jsx
const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/candies/${this.props.candy._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.candy.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.candy.color}/><br/>
          Quantity: <input type="text" name="quantity"  defaultValue={this.props.candy.quantity}/><br/>
          Is Ready To Eat:
              { this.props.candy.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;