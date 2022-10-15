import React from 'react';
import Slider from "react-slick";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import CircleProgress from "../elements/progressbar/CircleProgress";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterFour from '../common/footer/FooterTwo';
import SplitSectionTwo from '../elements/split/SlipTwo';
import TimelineOne from '../elements/timeline/TimelineOne';

const BannerData = [
    {
        image: "./images/banner/banenr-image-01.png",
        title: "Web3 Solutions <br /> For Victorian Era Problems.",
        description: "From concept to creation, <br /> KronicLabz is dedicated to bringing your idea, to reality."
    },
    {
        image: "./images/banner/banenr-image-02.png",
        title: "Development Services <br /> You Can Actually Afford.",
        description: "From Blockchain security audits and development, <br /> to educational courses and project creation and management. <br /> there's not much we can't help you do."
    },
]


const Startup = () => {
    return (
        <>
            <SEO title="Startup Agency" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 variation-2 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg-overlay bg_image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="col-lg-12">
                                            <div className="inner text-center">
                                                <h1 className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* End Slider Area  */}


                <Separator />
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="More than a jpeg."
                                    title="This Is A Movement."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <SplitSectionTwo classVar="no-gradient" />
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                <div className="rwt-elements-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--25">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Did you know?"
                                    title="You Are Still Early"
                                    description="In fact, many have claimed this to be their second chance at the dot.com boom!"
                                />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1 mt--10">
                            <CircleProgress />
                        </div>
                    </div>
                </div>

                <Separator />
                <div className="rwt-elements-area rn-section-gap">
                    <div className="container-fluid plr--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Our Goals"
                                    title="We Want To Help Web3 Grow"
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1 mt--10">
                            <TimelineOne />
                        </div>
                    </div>
                </div>

                <FooterFour />
            </main>
        </>
    )
}

export default Startup;
