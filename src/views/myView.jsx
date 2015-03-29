var React = require('react');
 
var MyView = React.createClass({
  render: function(){
    return (
      <div>
        This Is My First React ~~
      </div>
    );
  }
});
 
 
function render() {
  return <MyView />;
}
 
 
module.exports = render