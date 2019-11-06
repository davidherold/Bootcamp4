import React from 'react';

class BuilingList extends React.Component {

	render() {

		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;
		data.filter(directory => {
			return(
				favourites.indexOf(directory.id) === -1 && !directory.name.toLowerCase().indexOf(input)
			)
		})

		const buildingList = data.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick={() => handleFavourite(id)}>{directory.name}</td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;  