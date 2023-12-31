import { Page } from 'playwright';

export default class ElementsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async clickButtons(): Promise<void> {
        await this.page.getByText('Elements').click();
        await this.page.getByText('Buttons').click();
        await this.page.getByText('Double Click Me').dblclick();
        await this.page.getByText('Right Click Me').click({ button: 'right' });
        await this.page.getByRole('button', { name: 'Click Me', exact: true }).click();
        
    }
}