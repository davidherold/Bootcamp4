import React from 'react';

class ViewBuilding extends React.Component {
  render() {
    const { data, selectedBuilding } = this.props;
    let output = (
      <div>
        <b>View Building Information</b>
        <p>
          <i>Click on a name to view more information</i>
        </p>
      </div>
    );
    if (selectedBuilding !== null) {
    output = (        
    	<p>
			<div>
		  	Code : {data[selectedBuilding].code}<br/>
			Name : {data[selectedBuilding].name}<br/>
			Address : {data[selectedBuilding].address}<br/>
			</div>	
        	{data[selectedBuilding].coordinates !== undefined && (
       		<div>                
            Coordinates:<br/>                
            Latitude : {data[selectedBuilding].coordinates.latitude}<br/>               
            Longitude : {data[selectedBuilding].coordinates.longitude}<br/>
          	</div>
        	)}
        </p>        
      );
    }
    return output;
  }
}
export default ViewBuilding;