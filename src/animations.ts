import {trigger, animate, transition, style, query} from '@angular/animations';

/**
 * FadeIn Animation
 *
 * @type {AnimationTriggerMetadata}
 */
export const fadeInAnimation = trigger('fadeInAnimation', [
	transition('* <=> *', [
		// route 'enter' transition
		query(':enter', [
			style({opacity: 0}),
			animate('.3s', style({opacity: 1}))
		], {optional: true}),
	])
]);
