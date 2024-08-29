export const dateFormatter = (isoDate, type) => {
	if (isoDate !== null && isoDate !== undefined) {
		try {
			if (type === 'full-date') {
				return new Intl.DateTimeFormat('id-ID', {
					year: 'numeric',
					month: 'numeric',
					day: '2-digit',
					hour: 'numeric',
					minute: 'numeric',
				})
					.format(new Date(isoDate))
					.replace(',', '');
			}
			return new Intl.DateTimeFormat('id-ID', {
				year: 'numeric',
				month: 'numeric',
				day: '2-digit',
			})
				.format(new Date(isoDate))
				.replace(',', '');
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			return '';
		}
	}
	return '';
};

export const hourFormatter = (isoDate) => {
	if (isoDate !== null && isoDate !== undefined) {
		try {
			return new Intl.DateTimeFormat('id-ID', {
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

export const calculateRemainingDueDateDays = (date) => {
	const dueDate = new Date(date);
	const todayDate = new Date();

	const diffTime = dueDate.getTime() - todayDate.getTime();

	return Math.round(diffTime / (1000 * 3600 * 24));
};
