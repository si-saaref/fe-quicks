import { useState } from 'react';
import DetailChatSidebar from '../components/organisms/detailChatSidebar';
import ListChatSidebar from '../components/organisms/listChatSidebar';

export default function InboxSidebar() {
	const [idDetailChat, setIdDetailChat] = useState(null);

	if (idDetailChat) {
		return <DetailChatSidebar handleCloseDetail={() => setIdDetailChat(null)} />;
	}

	return <ListChatSidebar handleSetDetailChatId={setIdDetailChat} />;
}
