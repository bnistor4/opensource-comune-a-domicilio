import React from "react";
import { ListItem } from './Item';

export const Category = ({ name = '', category = []}) => {
   return (
		<div id={name.replace(' ', '_')} className="category">
			<h1 className="category">
				{name}
			</h1>
			<div>
				{
               category.map(props => (
							<ListItem key={props.phone} {...props} />
						))
				}
			</div>
		</div>
	);
};
