import React from "react";
import { Composition } from "remotion";
import { Main } from "./Composition";
import {
	DURATION_IN_FRAMES,
	VIDEO_FPS,
	VIDEO_HEIGHT,
	VIDEO_WIDTH,
} from "../../types/constants";

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="main-composition"
				component={Main}
				durationInFrames={DURATION_IN_FRAMES}
				fps={VIDEO_FPS}
				width={VIDEO_WIDTH}
				height={VIDEO_HEIGHT}
			/>
		</>
	);
};
