import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Ultimate News Quiz"
            optionalClass="mx-auto mb-8"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <div className="flex flex-col w-full max-w-3xl items-start">
            <p>I redesigned and rebuilt the <a href="http://www.theultimatenewsquiz.com">Ultimate News Quiz</a> website.</p>

            <p>As this is a big charity event sponsored by organisations like the Premier League, and held by Restless Development and Action for Children, I wanted to keep the essence of the brand, mainly the logo and the colour palette, intact.</p>

            <p>From there, my main concern was simplifying the design, whilst highlighting the most important aspects of the event (the mission, the sponsors and the attendees) and, of course, getting people to register with clear CTAs.</p>

            <p>Below you can see the original website and the website I designed and built.</p>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 mb-8 lg:w-9/12 w-full justify-evenly">
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
                        <li>WordPress</li>
                        <li>Photoshop</li>
                        <li>HTML/CSS/JS</li>
                        <li>Accessibility Guidelines</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
                <img src="/images/unq/unq-home.jpg" alt="Ultimate News Quiz old homepage" loading="lazy" />
                <img src="/images/unq/unq-home2.jpg" alt="Ultimate News Quiz new homepage" loading="lazy" />
            </div>
        </div>
    )
}
  
export default MarketInvoice;