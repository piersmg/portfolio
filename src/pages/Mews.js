import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Mews"
            optionalClass="mx-auto mb-8 text-center"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <div className="flex flex-col w-full max-w-3xl items-start">
                <p>I work at <a href="https://www.mews.com/en">Mews</a>, a Propety Management Software company; in 2020 the company re-branded and so I built the website in Hubspot from scratch.</p>
                <p>As this website is hosted on the Hubspot CMS I had to consider the experience of both the external user of the site and the internal user, i.e. editors and developers. I therefore used the same component-based strategy (modules in Hubspot) that is used in JavaScript frameworks like React, Vue, Svelte etc. This gives flexibilty to the Marketing team to build web pages how they want and also ensures the code base is as minimal as possible. Having a website that is difficult to maintain, update, and improve can be a hindrance to a business, especially a growth business, and in the long run will affect that quality of the site.</p>
                <p>Mews is also an international business so it was a requirement that the website be translatable. I have set it up so that it's possible to swap between the different language versions of any page that is translated, rather than only being able to swap between distinct language websites as some websites do (i.e. if you swap to, say, German you will be directed to the German homepage even if you were on a product page previously).</p>
                <p>I built the website using HTML and HubL, and used HubDB and REST APIs in conjunction with traditional CMS content editing to add content. For example, the resources pages, careers listings, customer stories, and the website marketplace all use HubDB or REST APIs to populate the content. This gives the Marketing team a scalable method of content management.</p>
                <p>After building the website for the rebrand, my job at Mews turned into a management role. Alongside continuing development work, I am now in charge of website strategy, data analysis, A/B testing, and optimisation among other things.</p>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 mb-8 lg:w-9/12 w-full justify-evenly">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="text-xl">Skills used</p>
                    <ul>
                        <li>Web development</li>
                        <li>Information Architecture</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl">Tools used</p>
                    <ul>
                        <li>Hubspot</li>
                        <li>HubL (Hubspot templating language)</li>
                        <li>HubDB (Hubspot relational data storage)</li>
                        <li>REST APIs</li>
                        <li>HTML/CSS/JS</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/mews/mews-home-old.png" alt="Mews old homepage" loading="lazy" />
                <img src="/images/mews/mews-home-new.png" alt="Mews new homepage" loading="lazy" />
            </div>
        </div>
    )
}
  
export default MarketInvoice;