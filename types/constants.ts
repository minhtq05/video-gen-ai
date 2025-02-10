import { z } from "zod";

export const CompositionProps = z.object({
	title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
	title: "Next.js and Remotion",
};

export const VIDEO_FPS = 30;
export const DURATION_IN_FRAMES = VIDEO_FPS * 10;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
