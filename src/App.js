
import React from 'react';
import './styles/app.scss';
import LayoutDesktop from './js/components/LayoutDesktop';
import LayoutMobile from './js/components/LayoutMobile';
import useMobileDetect from './js/hooks/useMobileDetect';

function App() {
	const isMobile = useMobileDetect();
	
	return (
		<div className="wrapper">
			<div className="container">
				<div className="section-head">
					<h1 className="m-0">Our <span className="gradient-text">process</span></h1>
				</div>

				{isMobile && <LayoutMobile />}

				{!isMobile && <LayoutDesktop />}
			</div>     
		</div>
	);
}

export default App;
