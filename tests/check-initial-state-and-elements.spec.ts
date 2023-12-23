// Завдання 1 
// Зайти на https://demoqa.com/
// Перевірити чи всі категорії відображаються. 

// Завдання 2
// Перейти з головної сторінки на категорію Elements
// Перейти на підкатегорію Buttons (юрл має бути https://demoqa.com/buttons)
// Клікнути на всі кнопки так як вимагається, 
//перевірити чи після кліку зявилось повідомлення про те що кнопка клікнулась і яка саме кнопка клікнулась

import { Locator, test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
}); 

test.describe(async () => {

    test('All categories are displayed', async ({ page }) => {

        const expectedCategoriesText: string[] = [
            'Elements',
            'Forms',
            'Alerts, Frame & Windows',
            'Widgets',
            'Interactions',
            'Book Store Application'
        ]

        // const array: string[]= await page.locator('.card-body').allInnerTexts();
        // console.log(array);

        const actualCategoriesText: string[] = [];

        const expandedElementsCount: number = await page.locator('.card-body').count();

        for (let index = 0; index < expandedElementsCount; index++) {
            let textElement: string = await page.locator('.card-body').nth(index).innerText();
            actualCategoriesText.push(textElement);

        }

        expect(actualCategoriesText).toEqual(expectedCategoriesText);
    });

});

    test.('Checking button clicks', async( {page} )=> {
        await page.getByText('Elements').click();
        await page.getByText('Buttons').click();
        await page.getByText('Double Click Me').dblclick();
        await expect(page.getByText('You have done a double click')).toBeVisible();
        await page.getByText('Right Click Me').click({ button: 'right' });
        await expect(page.getByText('You have done a right click')).toBeVisible();
        const clickMeButton = page.locator('.btn btn-primary:nth-child(3)');
        await clickMeButton.click({ force: true });
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();

    });