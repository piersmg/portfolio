import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Herniman"
            optionalClass="mx-auto mb-8"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <div className="flex flex-col w-full max-w-3xl items-start">
                <p>I redesigned and rebuilt this website for architecture firm <a href="http://www.herniman.com.au/">Herniman Group</a>.</p>
                <p>The brief was to modernise, simplify, and feature project images more prominently. I also wanted to make the look and feel more consistent and so came up with a few design elements, e.g. the three text blocks with a red stripe, that could be used across all the pages and would add a bit of colour.</p>
                <p>The more prominent project images and a bit more use of colour makes the website more vibrant than the old version.</p>
                <p>Below you can see examples of the original website and the website I built.</p>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 lg:w-9/12 w-full justify-evenly">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="text-xl">Skills used</p>
                    <ul>
                        <li>Information Architecture</li>
                        <li>Copywriting</li>
                        <li>Web design</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl">Tools used</p>
                    <ul>
                        <li>Pen and paper</li>
                        <li>WordPress</li>
                        <li>Sketch</li>
                        <li>HTML/CSS/JS</li>
                        <li>Accessibility Guidelines</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/herniman/herniman-old1.png" alt="Herniman old homepage" loading="lazy" />
                <img src="/images/herniman/herniman-new1.png" alt="Herniman new homepage" loading="lazy" />
            </div>
            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/herniman/herniman-old2.png" alt="Herniman old about us page" loading="lazy" />
                <img src="/images/herniman/herniman-new2.png" alt="Herniman new about us page" loading="lazy" />
            </div>
            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/herniman/herniman-old3.png" alt="Herniman old services page" loading="lazy" />
                <img src="/images/herniman/herniman-new3.png" alt="Herniman new services page" loading="lazy" />
            </div>
        </div>
    )
}
  
export default MarketInvoice;