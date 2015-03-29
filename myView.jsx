var React = require('react');
 
var MyView = React.createClass({
  render: function(){
    return (
      <div>
        My First React LOL
      </div>
    );
  }
});
 
 
function render() {
  return <MyView />;
}
 
 
module.exports = render