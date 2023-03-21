  enum BreakPoints {
		MINI_DESKTOP = 1024
	}

	class AdaptiveService {
		constructor() {
		}

		get isMinDesktop(): boolean {
				return window.innerWidth >= BreakPoints.MINI_DESKTOP;
		}
	}

	export default new AdaptiveService()