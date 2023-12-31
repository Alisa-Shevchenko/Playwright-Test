
// Завдання 2
// Перейти з головної сторінки на категорію Elements
// Перейти на підкатегорію Buttons (юрл має бути https://demoqa.com/buttons)
// Клікнути на всі кнопки так як вимагається, 
//перевірити чи після кліку зявилось повідомлення про те що кнопка клікнулась і яка саме кнопка клікнулась


import { test, expect } from '@playwright/test';
import ElementsPage from '../pageObject/elementsPage';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('elementsPage', async () => {

    test('Checking button clicks and text', async ({ page }) => {

        const elementsPage = new ElementsPage(page);
        await elementsPage.clickButtons();
        await expect(page.getByText('You have done a double click')).toBeVisible();
        await expect(page.getByText('You have done a right click')).toBeVisible();
        await expect(page.getByText('You have done a dynamic click')).toBeVisible();
    });

});
