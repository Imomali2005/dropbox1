import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<p>
		     DropBox by  Insavaliyev Imomali,  2020 |
				</p>
		</footer>
	);
};

const MemoFooter = React.memo(Footer);

export default MemoFooter;
