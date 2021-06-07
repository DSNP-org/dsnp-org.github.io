import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import ContentCard from "../components/common/IndexPostCard"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import ClickDrag from "../images/ClickDrag.svg"
import ScrollContainer from 'react-indiana-drag-scroll'
import * as paper from 'paper'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { generateKey } from "../utils/keyGenerator"
import UpArrow from "../images/up-arrow-btn.svg"

/**
* Main index page (home page)
*
* Shows intro information.
*
*/
const Index = ({ data, location }) => {
    const [isCustomCursor, setIsCustomCursor] = useState(false)
    const [isHoveringLink, setIsHoveringLink] = useState(false)

    const posts = data.allGhostPost.nodes

    const whatWeDo = posts.filter(post => post.tags.some(tag => tag.name === `#HomePageWhatWeDo`))
    const partnersCards = posts.filter(post => post.tags.some(tag => tag.name === `#HomePagePartners`))
    const ecosystemCards = posts.filter(card => card.tags.some(tag => tag.name === `#HomePageEcosystemCard`))

    const partnersCardsContainer = typeof document !== `undefined` ? document.createElement(`div`) : null
    if (partnersCardsContainer) {
        partnersCardsContainer.innerHTML = partnersCards[0].html
    }

    const cursorIconSettings = () => {
        let clientX = -100
        let clientY = -100
        const innerCursor = typeof document !== `undefined` ? document.querySelector(`.cursor--small`) : null
        if (typeof document !== `undefined`) {
            document.addEventListener(`mousemove`, (e) => {
                clientX = e.clientX
                clientY = e.clientY
            })
        }
        const doRender = () => {
            innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`
            requestAnimationFrame(doRender)
        }
        requestAnimationFrame(doRender)

        let lastX = 0
        let lastY = 0
        let group
        const canvas = typeof document !== `undefined` ? document.querySelector(`.cursor--canvas`) : null
        paper.setup(canvas)

        const myPathLeft = new paper.Path()
        myPathLeft.strokeColor = `#469abd`
        myPathLeft.strokeWidth = 2
        myPathLeft.add(new paper.Point(15, 15))
        myPathLeft.add(new paper.Point(0, 30))
        myPathLeft.add(new paper.Point(15, 45))

        const myCircle = new paper.Path.Circle(new paper.Point(57.5, 30), 30)
        myCircle.strokeColor = `#469abd`
        myCircle.strokeWidth = 2

        const myPathRight = new paper.Path()
        myPathRight.strokeColor = `#469abd`
        myPathRight.strokeWidth = 2
        myPathRight.add(new paper.Point(100, 15))
        myPathRight.add(new paper.Point(115, 30))
        myPathRight.add(new paper.Point(100, 45))

        const initCanvas = () => {
            group = new paper.Group([myPathLeft, myCircle, myPathRight])
            const lerp = (a, b, n) => (1 - n) * a + n * b
            paper.view.onFrame = () => {
                lastX = lerp(lastX, clientX, 0.2)
                lastY = lerp(lastY, clientY, 0.2)
                group.position = new paper.Point(lastX, lastY)
                if (isHoveringLink) {
                    group.strokeWidth = 3
                }
            }
        }

        initCanvas()

        const initHovers = () => {
            // find the center of the link element and set stuckX and stuckY
            // these are needed to set the position of the noisy circle
            const handleMouseEnter = (e) => {
                const navItem = e.currentTarget
                const navItemBox = navItem.getBoundingClientRect()
                console.log(navItemBox)
                setIsHoveringLink(true)
            }

            const handleMouseLeave = (e) => {
                const navItem = e.currentTarget
                const navItemBox = navItem.getBoundingClientRect()
                console.log(navItemBox)
                setIsHoveringLink(false)
            }

            // add event listeners to all items
            const linkItems = typeof document !== `undefined` ? document.querySelectorAll(`.hoverLink`) : null
            linkItems.forEach((item) => {
                item.addEventListener(`mouseenter`, handleMouseEnter)
                item.addEventListener(`mouseleave`, handleMouseLeave)
            })
        }

        initHovers()
    }

    const responsive = {
        0: { items: 1.5 },
        600: { items: 2.5 },
        1000: { items: 3.5 },
        1400: { items: 4.5 },
        2000: { items: 5 },
    }

    const items = partnersCardsContainer ? [...partnersCardsContainer.children].map((cardData, index) => <section data-value={`${ index + 1 }`} key={index} dangerouslySetInnerHTML={{ __html: cardData.innerHTML }}/>) : null

    useEffect(() => {
        if (isCustomCursor) {
            cursorIconSettings()
        }
    }, [isCustomCursor])

    return (
        <ParallaxProvider>
            <div className={!isCustomCursor ? `Index__block` : `Index__block Index__blockCustomCursor`}>
                {isCustomCursor &&
                    <>
                        <div className="cursor cursor--small"></div>
                        <canvas className="cursor cursor--canvas"></canvas>
                    </>
                }
                <MetaData location={location}/>
                <Layout isHome={true}>
                    <div className="container">
                        <div>
                            <h2 className="ContentCard__blockTitle">{whatWeDo[0].title}</h2>
                            <section className="site-banner-desc" dangerouslySetInnerHTML={{ __html: whatWeDo[0].html }} />
                            <img className="Layout__arrowButton" src={UpArrow} alt="up-arrow-button"/>
                        </div>
                        <div className="body-block">
                            <div className="ContentCard__blockTitle" data-aos="fade-right" data-aos-duration="1400">
                                The Unfinished Ecosystem
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => setIsCustomCursor(true)} onMouseLeave={() => setIsCustomCursor(false)}>
                        <Parallax>
                            <ScrollContainer className="ContentCard__block" >
                                <img src={ClickDrag} alt="click-drag" className="ContentCard__clickDrag" />
                                {ecosystemCards.map((cardData, index) => <ContentCard cardData={cardData} key={generateKey(cardData.title)} index={index + 1}/>)}
                            </ScrollContainer>
                        </Parallax>
                    </div>
                    <div className="container">
                        {/*<div className="body-block">*/}
                        {/*    <h2 className="ContentCard__blockTitle">{relationToUnfinished[0].title}</h2>*/}
                        {/*    <section className="site-banner-desc" dangerouslySetInnerHTML={{ __html: relationToUnfinished[0].html }} />*/}
                        {/*</div>*/}
                        <div className="body-block">
                            <div className="ContentCard__blockTitle" data-aos="fade-right" data-aos-duration="1400">
                                Our Partners
                            </div>
                        </div>
                    </div>
                    <div className="Index__partnersLogosBlock">
                        {items && <AliceCarousel
                            items={items}
                            responsive={responsive}
                            autoPlayInterval={2000}
                            autoPlay={true}
                            fadeOutAnimation={true}
                            disableAutoPlayOnAction={true}
                        />}
                    </div>
                </Layout>
            </div>
        </ParallaxProvider>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostIndexQuery {
    allGhostPost(filter: {tags: {elemMatch: {name: {in: ["#HomePage", "#HomePagePartners"]}}}}) {
        nodes {
          title
          html
          id
          tags {
            name
          }
        }
    }
  }
`
