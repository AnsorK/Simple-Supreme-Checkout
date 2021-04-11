const { webkit } = require( 'playwright' );

const delay = ms => new Promise( res => setTimeout( res, ms ) );

( async () => {
    const browser = await webkit.launch( { headless: false } );
    const page = await browser.newPage();
    await page.goto( 'https://www.supremenewyork.com/shop/all' );
    await page.click( '#container > li:nth-child(1) > div > a' );
    await page.click( '#add-remove-buttons > input' );
    await delay( 1000 );
    await page.goto( 'https://www.supremenewyork.com/shop/cart' );
    await page.click( '#cart-footer > a.button.checkout' );
    await page.fill( '#order_billing_name', 'John Doe' );
    await page.fill( '#order_email', 'johndoe@gmail.com' );
    await page.fill( '#order_tel', '0123456789' );
    await page.fill( '#bo', '123 St' );
    await page.fill( '#order_billing_zip', '12345' );
    await page.fill( '#order_billing_city', 'New York' );
    await page.selectOption( '#order_billing_state', 'NY' );
    await page.fill( '#rnsnckrn', '1111111111111111' );
    await page.selectOption( '#credit_card_month', '01' );
    await page.selectOption( '#credit_card_year', '2022' );
    await page.fill( '#orcer', '123' );
    await page.check( '#cart-cc > fieldset > p > label > div > ins' );
    await page.click( '#pay > input' );
    await page.click( '#no_store_credit' );
    await delay( 5000 );
    await browser.close();
} )();
