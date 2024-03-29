'use client';
import { ClassCard } from '@/components/ClassCard';
import { UploadRosterForm } from '@/components/UploadRosterForm';
import { Card } from '@/components/ui/card';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { CardDemo } from '@/components/CardDemo';
import { AnimatedTooltipPreview } from '@/components/AnimatedTooltipPreview';
import { FollowerPointerCard } from '@/components/ui/following-pointer';

export default function Page({ children }: { children: React.ReactNode }) {
	const classes = useQuery(api.classes.getClasses);

	return (
		<>
			<div className="grid grid-cols-3 gap-4 p-4 ">
				{classes?.map((c) => (
					// <ClassCard classId={c._id} className={c.name} key={c._id} />
					// <FollowerPointerCard>
					<CardDemo classDoc={c} />
					// </FollowerPointerCard>
				))}
				<Card className="p-4 bg-primary-light">
					<UploadRosterForm />
				</Card>
			</div>
		</>
	);
}
