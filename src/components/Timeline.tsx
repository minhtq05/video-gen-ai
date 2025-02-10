import { RefObject } from "react";
import { PlayerRef } from "@remotion/player";
import { useCurrentPlayerFrame } from "@/hooks/use-current-player-frame";

export const Timeline: React.FC<{
	playerRef: RefObject<PlayerRef | null>;
	duration: number;
}> = ({ playerRef, duration }) => {
	const frame = useCurrentPlayerFrame(playerRef);

	return (
		<div className="h-full border-white border-2">
			{[...new Array(duration)].map((time) => (
				<p>{time}</p>
			))}
		</div>
	);
};
