"use client";

import { Main } from "@/remotion/Composition";
import { Player, PlayerRef } from "@remotion/player";
import { useRef } from "react";
import {
	DURATION_IN_FRAMES,
	VIDEO_FPS,
	VIDEO_HEIGHT,
	VIDEO_WIDTH,
} from "../../../types/constants";
import { Timeline } from "@/components/Timeline";

export default function LectureVideoEditor() {
	const playerRef = useRef<PlayerRef>(null);

	return (
		<div className="w-full h-full grid grid-flow-row grid-cols-3">
			<div className="col-span-1"></div>
			<div className="col-span-2 flex flex-col">
				<div className="overflow-hidden">
					<Player
						ref={playerRef}
						component={Main}
						durationInFrames={DURATION_IN_FRAMES}
						fps={VIDEO_FPS}
						compositionHeight={VIDEO_HEIGHT}
						compositionWidth={VIDEO_WIDTH}
						style={{
							width: "100%",
							background: "white",
							color: "black",
						}}
						controls
						acknowledgeRemotionLicense
					/>
				</div>
				<div className="grow overflow-x-auto">
					<Timeline
						playerRef={playerRef}
						duration={DURATION_IN_FRAMES}
					/>
				</div>
			</div>
		</div>
	);
}
