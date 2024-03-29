import { useState } from 'react';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export type useSavedGroupArgs = {
	classId?: Id<'classes'>;
};

export const useSavedGroups = ({ classId }: useSavedGroupArgs) => {
	const [savedId, setSavedId] = useState<false | Id<'savedGroups'>>(false);
	const removeSavedGroups = useMutation(api.savedGroups.removeSavedGroup);
	const getSavedGroupsByClass = useQuery(
		api.savedGroups.getSavedGroupsByClass,
		classId ? { classId: classId } : 'skip',
	);

	return {
		savedId,
		setSavedId,
		getSavedGroupsByClass,
		removeSavedGroups,
	};
};
