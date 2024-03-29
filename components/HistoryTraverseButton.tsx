import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCwIcon } from 'lucide-react';
import { RotateCcwIcon } from 'lucide-react';
type HistoryTraverseButtonProps = {
	variant: 'back' | 'forward';
	clickAction: () => void;
};

export const HistoryTraverseButton: React.FC<HistoryTraverseButtonProps> = ({
	variant,
	clickAction,
}) => {
	return (
		<Button
			onClick={clickAction}
			className="rounded-full border border-black/10 bg-background-secondary"
		>
			{variant === 'back' && (
				<RotateCwIcon
					size={16}
					strokeWidth={3}
					className="transform rotate-180"
				/>
			)}
			{variant === 'forward' && (
				<RotateCwIcon
					size={16}
					strokeWidth={3}
					className="transform rotate-180"
				/>
			)}
		</Button>
	);
};
