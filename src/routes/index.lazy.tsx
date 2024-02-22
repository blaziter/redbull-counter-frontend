import { createLazyFileRoute } from '@tanstack/react-router';
import { t } from '@lingui/macro';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return <div className="p-2">{t({ id: 'hello' })}</div>;
}
