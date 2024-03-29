// Generate random hex color
export function randomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const replaceLastNameWithInitial = (namesText: string) => {
	const processedStudentNames = namesText.split('\n').map((student) => {
		const nameParts = student.trim().split(' ');
		if (nameParts.length > 1) {
			// Take all parts except the last name and add the initial of the last name with a period
			return `${nameParts.slice(0, -1).join(' ')} ${
				nameParts[nameParts.length - 1][0]
			}.`;
		}
		return student; // Return the original student name if there is no last name
	});

	return processedStudentNames;
};
/*





*/
const getContrastColor = (hexcolor: string): string => {
	// Remove hash if it's there
	if (hexcolor.startsWith('#')) {
		hexcolor = hexcolor.substring(1);
	}

	// Convert HEX to a numerical value
	const value = parseInt(hexcolor, 16);

	// Calculate the midpoint of possible HEX values (0x000000 to 0xFFFFFF)
	const midpoint = 0xffffff / 2;

	// Determine if the color is closer to black or white
	return value > midpoint ? 'black' : 'white';
};
/*





*/
export const generateRandomEmoji = () => {
	const emojis = [
		'😀',
		'😃',
		'😄',
		'😁',
		'😆',
		'😅',
		'😂',
		'🤣',
		'😊',
		'😇',
		'🙂',
		'🙃',
		'😉',
		'😌',
		'😍',
		'🥰',
		'😘',
		'😗',
		'😙',
		'😚',
		'😋',
		'😛',
		'😝',
		'😜',
		'🤪',
		'🤨',
		'🧐',
		'🤓',
		'😎',
		'🤩',
		'🥳',
		'😏',
		'😒',
		'😞',
		'😔',
		'😟',
		'😕',
		'🙁',
		'😣',
		'😖',
		'😫',
		'😩',
		'🥺',
		'😢',
		'😭',
		'😤',
		'😠',
		'😡',
		'🤬',
		'🤯',
		'😳',
		'🥵',
		'🥶',
		'😱',
		'😨',
		'😰',
		'😥',
		'😓',
		'🤗',
		'🤔',
		'🤭',
		'🤫',
		'🤥',
		'😶',
		'😐',
		'😑',
		'😬',
		'🙄',
		'😯',
		'😦',
		'😧',
		'😮',
		'😲',
		'😴',
		'🤤',
		'😪',
		'😵',
		'🤐',
	];
	return emojis[Math.floor(Math.random() * emojis.length)];
};
