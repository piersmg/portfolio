import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="MarketFinance"
            optionalClass="mx-auto mb-8 text-center"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <p><a href="https://www.marketfinance.com">MarketFinance</a> (previously MarketInvoice) is an alternative finance or financial technology (FinTech) company that helps SMEs ease their cashflow problems.</p>
            <p>Whilst I worked there as a Website Manager and Designer there was a lot to do day-to-day in terms of maintenance, campaign support (SEO, PPC, sales etc), and to keep the site up to date with the changing business. However, the biggest project I had was to re-design the website when the company rebranded.</p>
            <div className="flex flex-col sm:flex-row mt-4 mb-8 lg:w-9/12 w-full justify-evenly">
                <div className="flex flex-col mb-4 md:mb-0">
                    <p className="text-xl">Skills used</p>
                    <ul>
                        <li>User Research</li>
                        <li>Information Architecture</li>
                        <li>Wireframing</li>
                        <li>Copywriting</li>
                        <li>Web design</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl">Tools used</p>
                    <ul>
                        <li>React/Redux</li>
                        <li>HTML/CSS/Vanilla JS</li>
                        <li>Sketch</li>
                        <li>Photoshop</li>
                        <li>InVision</li>
                        <li>Bootstrap (replaced with flexbox)</li>
                        <li>Accessibility Guidelines</li>
                    </ul>
                </div>
            </div>
            <h2 className="text-2xl mb-4">Homepage</h2>
            <p>Comparing the old and new homepage I designed shows the old brand and website was dull and "floaty", whereas the new design is much more considered, purposeful and bolder.</p>
            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/mi/mi-old.jpg" alt="MarketFinance old homepage" loading="lazy" />
                <img src="/images/mi/mi-new.jpg" alt="MarketFinance new homepage" loading="lazy" />
            </div>

            <h2 className="text-2xl mb-4 mt-8">Solutions page</h2>
            <p>To illustrate the process I went through during this rebrand, the following shows my journey on the redesign of the Solutions page.</p>
            <p>Originally the idea was to simply re-skin the old Product page in the new branding, as seen below in pen and paper and Sketch wireframes.</p>

            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/mi/mi-sol-pen.jpg" alt="MarketFinance solutions page pen wireframe" loading="lazy" />
                <img src="/images/mi/mi-sol-pen2.jpg" alt="MarketFinance solutions page pen wireframe" loading="lazy" />
                <img src="/images/mi/mi-sol-wireframe.jpg" alt="MarketFinance solutions page digital wireframe 1" loading="lazy" />
            </div>

            <p>I then did some Sketch wireframes to take back to the stakeholder. However, at the same time the company was rebranding, it was also developing new products to release further down the line. It became clear this comparative approach wasn't going to be able to meet the developing requirements of a multi-product business. This was my first attempt at showing multiple products.</p>

            <img src="images/mi/mi-sol-wireframe2.jpg" alt="MarketFinance solutions page digital wireframe 2" loading="lazy" />

            <p>The problem with this is that if you want to add or remove products, depending on the business' need, it will significantly alter the page and throw off its balance if there are an odd number of blocks. I then took a different approach with a menu-based system, the advantage being that items could be added to the menu without changing the page structure, as you can see below.</p>

            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/mi/mi-sol-wireframe3.jpg" alt="MarketFinance solutions page digital wireframe 3" loading="lazy" />
                <img src="/images/mi/mi-sol-menu.jpg" alt="MarketFinance solutions page digital wireframe for menu" loading="lazy" />
            </div>

            <p>This idea, however, didn't allow for easy comparison between products, something that we knew was an issue for users from testing and research. This was especially true as the products the company provided were not easily understood. Therefore, the aim was to give users an overview of what each product is, what it's good for and its terms in a more easily digestible way than the multi-product blocks. I re-thought the menu system and pared down to just the categorisations, which allowed me to show the individual products together in one screen, making them easier to compare. The shots below are the end result.</p>

            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/mi/mi-sol-final1.png" alt="MarketFinance solutions page final" loading="lazy" />
                <img src="/images/mi/mi-sol-final2.png" alt="MarketFinance solutions page final" loading="lazy" />
            </div>

            <h2 className="text-2xl mb-4 mt-8">Website Guidelines</h2>
            <p>After designing the website, I felt it was important that the style remained cohesive and consistent no matter who contributed to the website in the future and so I wrote these website guidelines as part of the wider brand guidelines.</p>
            <p>Standarisation, standardisation, standardisation.</p>

            <div className="grid grid-flow-row gap-4 md:grid-cols-2 grid-cols-1">
                <div className="flex flex-col">
                    <img className="!mb-2" src="images/mi/guidelines1.jpg" alt="MarketFinance brand colour guidelines" loading="lazy" />
                    <p className="text-sm">Laying out the brand colours, any variations, and use cases for the website.</p>
                </div>
                <div className="flex flex-col">
                    <img className="!mb-2" src="images/mi/guidelines2.jpg" alt="MarketFinance layout guidelines" loading="lazy" />
                    <p className="text-sm">A key brand value of MarketInvoice was Ease of Use and so I wanted this reflected as much as possible in the website. I developed the rules for the layout, block spacing and text to keep things simple but also to help the website stand out.</p>
                </div>
                <div className="flex flex-col">
                    <img className="!mb-2" src="images/mi/guidelines3.jpg" alt="MarketFinance menu guidelines" loading="lazy" />
                    <p className="text-sm">For menus, drop-downs and buttons on the website I wanted it to be above all flexible so that, for example, list items on a drop-down can be removed without affecting functionality or look.</p>
                    <p className="text-sm">Standardising menus was also very important so that functionality was the same on two different areas of the site, even though the design might be different, e.g. careers and FAQs.</p>
                </div>
                <div className="flex flex-col">
                    <img className="!mb-2" src="images/mi/guidelines6.jpg" alt="MarketFinance overall guidelines" loading="lazy" />
                    <p className="text-sm">I standardised overlays as I know from experience that if rules aren't in place, people will use whatever overlay looks good for the specific image or page which can result in a website feeling stylistically confused overall.</p>
                </div>
            </div>
        </div>
    )
}
  
export default MarketInvoice;