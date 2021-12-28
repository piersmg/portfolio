import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Attoe Aesthetics"
            optionalClass="mx-auto mb-8 text-center"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <div className="flex flex-col w-full max-w-3xl items-start">
            <p>I designed and built a new website for <a href="https://www.attoeaesthetics.co.uk/">Attoe Aesthetics</a>, an independent clinical skincare treatment business.</p>

            <p>The brief for this website was "clinical and feminine, but not too much pink!". The client came to me with just a logo, and so I helped her develop her brand from there, using the pink from the logo as an accent colour, finding a complimentary blue as the primary brand colour, and using a serif font to get the clinical feel she was looking for.
                The client wanted to use a cost-friendly, self-managed solution for her website so we settled on Wix (having considered a number of options suchs as Shopify and Squarespace).
            </p>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 mb-8 lg:w-9/12 w-full justify-evenly">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="text-xl">Skills used</p>
                    <ul>
                        <li>Brand design</li>
                        <li>Web design</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl">Tools used</p>
                    <ul>
                        <li>Wix</li>
                        <li>Photoshop</li>
                        <li>HTML</li>
                    </ul>
                </div>
            </div>

            <img src="/images/attoe/attoe-home.png" alt="Attoe Aesthetics homepage" loading="lazy" />
            <img src="/images/attoe/attoe-anti-wrinkle.png" alt="Attoe Aesthetics service page" loading="lazy" />
        </div>
    )
}
  
export default MarketInvoice;