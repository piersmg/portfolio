import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Empower Health and Fitness"
            optionalClass="mx-auto mb-8"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <p>This project was to design and build a new static website for a personal training business, Empower Health and Fitness. It also involved a brand update.</p>
            <div className="flex flex-col sm:flex-row mt-4 mb-8 lg:w-9/12 w-full justify-evenly">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="text-xl">Skills used</p>
                    <ul>
                        <li>Wireframing</li>
                        <li>Web design</li>
                        <li>UX Design</li>			
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl">Tools used</p>
                    <ul>
                        <li>Sketch</li>
                        <li>Photoshop</li>
                        <li>HTML/CSS/JS/jQuery</li>
                    </ul>
                </div>
            </div>
            <p>The brand brief for this project was "strong but not masculine", as the client is a strength training coach specialising in training women. Other stipulations were no dark brand colours and don't be intimidating. I wanted to combine this with large, striking imagery. The header font and box motif that I used throughout the website gives the site and brand the "strong" element, and the body font and brand colours (magenta as the primary colour and mint as the secondary, accent colour used for highlights) soften that a bit to satisfy the "not masculine" element. Overall I think I was successful in meeting this brief.</p>
            
            <img src="/images/empower/empower-home.jpg" alt="Empower homepage" loading="lazy" />
            
            <p>The biggest UX challenge I had while designing this website was on the Packages page, which features comparison tables with price and discount information. As tables are not responsive elements, the challenge was how best to display all of this information on mobile. The solution I came up with uses a dropdown for the user to select the pay period they want to view so they can compare the costs of upfront and weekly payments.</p>
            <div className="flex flex-col w-full max-w-3xl items-start">
                <p>One of the tables on the Packages page on desktop:</p>
            </div>

            <img src="/images/empower/empower-table.jpg" alt="Empower table on desktop" loading="lazy" />

            <div className="flex flex-col w-full max-w-3xl items-start">
                <p>The solution I came up with for mobile so that users could still compare upfront and weekly payments:</p>
            </div>

            <img src="/images/empower/empower-table-mob.jpg" alt="Empower table on mobile" loading="lazy" />

            <p>Another challenge I overcame was how best to show the testimonials. Having all the testimonials on one page with the "Before", "After", and a quote for each was a requirement.</p>

            <p>Using snippets from their quotes to give an overview and highlight points that are important to the client, with a "Read more" option that expands smoothly to reveal the detail, was the solution I chose.</p>	
            
            <img src="/images/empower/empower-testimonials.jpg" alt="Empower testimonials" loading="lazy" />
        </div>
    )
}
  
export default MarketInvoice;