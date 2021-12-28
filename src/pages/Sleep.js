import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Sleep Me Happy"
            optionalClass="mx-auto mb-8"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <div className="flex flex-col w-full max-w-3xl items-start">
            <p>I designed and built a website for <a href="https://sleepmehappy.com/">Sleep Me Happy</a>, a luxury pillow brand.</p>

            <p>These pillows are giant, luxury items and this website is the main method of buying the product as it's an online-only business. Some connection with a payment provider was therefore necessary. The owner of the business also wanted to be able to update content themselves.
            </p>

            <p>Given these parameters, I recommended they use Shopify for their website as they are a small boutique with no internal development resource with a small range of products. Shopify are also very established in the e-commerce space, with guides, templates, easy to use for non-developers for on-going site management etc. Shopify also handles credit card payments and security for you, and implementing your own payment system as a small business is a very bad idea!</p>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 mb-8 lg:w-9/12 w-full justify-evenly">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="text-xl">Skills used</p>
                    <ul>
                        <li>Brand design</li>
                        <li>Web design/development</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl">Tools used</p>
                    <ul>
                        <li>Shopify</li>
                        <li>Liquid</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
            </div>

            <img src="/images/sleep/sleep-home.png" alt="Sleep Me Happy homepage" loading="lazy" />
        </div>
    )
}
  
export default MarketInvoice;