export const dateFormatter = (isoDate) => {
	if (isoDate !== null && isoDate !== undefined) {
		try {
			return new Intl.DateTimeFormat('id-ID', {
				year: 'numeric',
				month: 'numeric',
				day: '2-digit',
				hour: 'numeric',
				minute: 'numeric',
			})
				.format(new Date(isoDate))
				.replace(',', '');
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			return '-';
		}
	}
	return '-';
};
