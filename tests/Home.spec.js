// @ts-check
import { test, expect } from '@playwright/test';
import { Endereco, User } from './src/models/user';
import { TIMEOUT } from 'dns';

test('Deve ir da página Home para a página Cadastro', async ({ page }) => {
  await page.goto('https://walkdog.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Walkdog by Papito');

  // Click the get started link.
  await page.getByRole('link', { name: 'Quero ser Dog Walker' }).click();

  await expect(page.getByRole('heading', { name: 'Faça seu cadastro' })).toBeVisible();
});

test('deve fazer cadastro', async ({ page }) => {

  const user = new User('Sohoboyyy', '00000014141', 'sohoboyyy@gmail.com')
  const endereco = new Endereco('22780674', '100', 'apto 205')

  await page.goto('https://walkdog.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Walkdog by Papito');

  // Click the get started link.
  await page.getByRole('link', { name: 'Quero ser Dog Walker' }).click();

  await expect(page.getByRole('heading', { name: 'Faça seu cadastro' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Nome completo' }).fill(user.nome)
  await page.getByRole('textbox', { name: 'E-mail' }).fill(user.email)
  await page.getByRole('textbox', { name: 'CPF somente números' }).fill(user.cpf)
  await page.getByRole('textbox', { name: 'CEP' }).fill(endereco.cep)
  await page.getByRole('button', { name: 'Buscar CEP' }).click()
  await page.getByPlaceholder('Número', { exact: true }).fill(endereco.numero);
  await page.getByRole('textbox', { name: 'complemento' }).fill(endereco.complemento)

  await page.getByAltText('Cuidar', {exact: true}).click();
await page.getByText('Upload do seu documento de').click();  
 await page.setInputFiles('input[type="file"]', 'tests/fixtures/toretto.jpg');
    await page.getByRole('button', { name: 'Cadastrar' }).click()
      await expect(page.getByRole('heading', { name: 'Obrigado!' })).toBeVisible();



});

test('deve cadastrar o cpf errado', async ({ page }) => {

  const user = new User('Sohoboyyy', '0000001441a', 'sohoboyyy@gmail.com')
  const endereco = new Endereco('22780674', '100', 'apto 205')

  await page.goto('https://walkdog.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Walkdog by Papito');

  // Click the get started link.
  await page.getByRole('link', { name: 'Quero ser Dog Walker' }).click();

  await expect(page.getByRole('heading', { name: 'Faça seu cadastro' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Nome completo' }).fill(user.nome)
  await page.getByRole('textbox', { name: 'E-mail' }).fill(user.email)
  await page.getByRole('textbox', { name: 'CPF somente números' }).fill(user.cpf)
  await page.getByRole('textbox', { name: 'CEP' }).fill(endereco.cep)
  await page.getByRole('button', { name: 'Buscar CEP' }).click()
  await page.getByPlaceholder('Número', { exact: true }).fill(endereco.numero);
  await page.getByRole('textbox', { name: 'complemento' }).fill(endereco.complemento)

  await page.getByAltText('Cuidar', {exact: true}).click();
await page.getByText('Upload do seu documento de').click();  
 await page.setInputFiles('input[type="file"]', 'tests/fixtures/toretto.jpg');
    await page.getByRole('button', { name: 'Cadastrar' }).click()
  await expect(page.locator('.alert-error')).toHaveText('CPF inválido');



});

test('deve escolher a opção adestrar', async ({ page }) => {

  const user = new User('Sohoboyyy', '00000014141', 'sohoboyyy@gmail.com')
  const endereco = new Endereco('22780674', '100', 'apto 205')

  await page.goto('https://walkdog.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Walkdog by Papito');

  // Click the get started link.
  await page.getByRole('link', { name: 'Quero ser Dog Walker' }).click();

  await expect(page.getByRole('heading', { name: 'Faça seu cadastro' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Nome completo' }).fill(user.nome)
  await page.getByRole('textbox', { name: 'E-mail' }).fill(user.email)
  await page.getByRole('textbox', { name: 'CPF somente números' }).fill(user.cpf)
  await page.getByRole('textbox', { name: 'CEP' }).fill(endereco.cep)
  await page.getByRole('button', { name: 'Buscar CEP' }).click()
  await page.getByPlaceholder('Número', { exact: true }).fill(endereco.numero);
  await page.getByRole('textbox', { name: 'complemento' }).fill(endereco.complemento)

  await page.getByAltText('Adestrar', {exact: true}).click();
await page.getByText('Upload do seu documento de').click();  
 await page.setInputFiles('input[type="file"]', 'tests/fixtures/toretto.jpg');
    await page.getByRole('button', { name: 'Cadastrar' }).click()
      await expect(page.getByRole('heading', { name: 'Obrigado!' })).toBeVisible();



});