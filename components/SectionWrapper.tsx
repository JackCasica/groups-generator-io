import React from 'react';
type SectionWrapperProps = {
	children: React.ReactNode;
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
	return (
		<div className="section-wrapper w-full max-w-screen-lg">{children}</div>
	);
};
