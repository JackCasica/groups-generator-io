import { cn } from '@/lib/utils';
import { Button } from '@shadcn/button';
import { StarIcon } from 'lucide-react';
import { Id } from '@/convex/_generated/dataModel';
import React from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
type SaveGroupsButtonProps = {
	saveGroupsFn: () => void;
	savedId: false | Id<'savedGroups'>;
};

export const SaveGroupsButton: React.FC<SaveGroupsButtonProps> = ({
	saveGroupsFn,
	savedId,
}) => {
	const removeSavedGroups = useMutation(api.savedGroups.removeSavedGroup);

	const onClickHandler = async () => {
		savedId ? removeSavedGroups({ savedGroupId: savedId }) : saveGroupsFn();
	};

	return (
		<Button onClick={onClickHandler} variant="ghost">
			<StarIcon
				size={24}
				strokeWidth={3}
				className={cn(
					'text-foreground-secondary',
					savedId && 'fill-foreground-secondary',
				)}
			/>
		</Button>
	);
};
