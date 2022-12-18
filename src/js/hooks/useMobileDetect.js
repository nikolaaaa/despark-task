import { useState, useEffect } from "react";

const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
		window.innerWidth < 575 ? setIsMobile(true) : setIsMobile(false);

		window.addEventListener('resize', () => {
			window.innerWidth < 575 ? setIsMobile(true) : setIsMobile(false);
		});
	}, [isMobile])

    return isMobile;
}

export default useMobileDetect