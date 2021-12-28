import Content from "../components/Content";

const MarketInvoice = () => {
    return (
        <Content 
            title="Seascape"
            optionalClass="mx-auto mb-8"
            body={<Body />}
        />
    )
}

const Body = () => {
    return (
        <div className="flex flex-col mx-auto items-center">

            <div className="flex flex-col w-full max-w-3xl items-start">
                <p>I designed and built a website for <a href="https://www.seascapeconstantine.com/">Seascape</a>, a holiday rental in Cornwall.</p>

                <p>This holiday rental beach home became an independently managed property and so needed their own website to advertise and take bookings.</p>

                <p>As they were striking out on their own, they didn't have a strong idea of their brand, and so I did some consultation with them first on this. In the end we settled for white and sky blue, in an attempt to evoke summer holidays by the beach. I used a large hero image on the homepage with plenty of blue sky and a simple logo and menu to give a feeling of care-free space.</p>
                <p>An important part of this website was of course the booking functionality, which I implemented for them. I hosted this website on Wordpress so they could manage bookings and content themselves.</p>
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
                        <li>Wordpress</li>
                        <li>HTML/CSS</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
            </div>

            <img src="/images/seascape/seascape-home.png" alt="Seascape homepage" loading="lazy" />
        </div>
    )
}
  
export default MarketInvoice;