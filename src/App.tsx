import { RouterProvider, createRouter } from '@tanstack/react-router';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

import { defaultLocale, loadCatalog } from './locales/i18n';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

await loadCatalog(defaultLocale);

const App = () => {
    return (
        <I18nProvider i18n={i18n}>
            <RouterProvider router={router} />
        </I18nProvider>
    );
};

export default App;
