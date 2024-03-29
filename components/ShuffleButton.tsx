import { Button } from '@shadcn/button';
import { Shuffle } from 'lucide-react';
import React from 'react';

export type ShuffleButtonProps = {
	shuffleGroupsFn: () => void;
};

export const ShuffleButton: React.FC<ShuffleButtonProps> = ({
	shuffleGroupsFn,
}) => {
	return (
		<Button
			variant="outline"
			size="sm"
			className="bg-background-secondary"
			onClick={shuffleGroupsFn}
		>
			<Shuffle height={16} width={16} color="black" />
		</Button>
	);
};
