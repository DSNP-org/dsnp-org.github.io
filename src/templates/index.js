import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import ContentCard from "../components/common/ContentCard"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import ClickDrag from "../images/ClickDrag.svg"
import ScrollContainer from 'react-indiana-drag-scroll'
import * as paper from 'paper'

/**
* Main index page (home page)
*
* Shows intro information.
*
*/
const Index = ({ data, location }) => {
    const [isCustomCursor, setIsCustomCursor] = useState(false)
    const [isHoveringLink, setIsHoveringLink] = useState(false)

    const site = data.allGhostPage.edges[0].node
    const cards = data.allGhostPost.nodes

    let parser = new DOMParser()
    const siteContent = parser.parseFromString(site.html, `text/html`).body

    const generateKey = pre => `${ pre }_${ new Date().getTime() }`

    const getSiteContent = (element, index) => {
        if (element.tagName === `P`) {
            return <p key={generateKey(index)}>
                {element.innerText}
            </p>
        } else if (element.tagName === `H2`) {
            return <h2 key={generateKey(index)}>
                {element.innerText}
            </h2>
        } else if (element.tagName === `H3`) {
            return <h3 key={generateKey(index)}>
                {element.innerText}
            </h3>
        } else if (element.innerText !== undefined) {
            return <div key={generateKey(index)}>{element.innerText}</div>
        }
        return <div key={generateKey(index)}></div>
    }

    const cursorIconSettings = () => {
        let clientX = -100
        let clientY = -100
        const innerCursor = typeof document !== `undefined` ? document.querySelector(`.cursor--small`) : null

        // add listener to track the current mouse position
        if (typeof document !== `undefined`) {
            document.addEventListener(`mousemove`, (e) => {
                clientX = e.clientX
                clientY = e.clientY
            })
        }

        // transform the innerCursor to the current mouse position
        // use requestAnimationFrame() for smooth performance
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

            // function for linear interpolation of values
            const lerp = (a, b, n) => (1 - n) * a + n * b

            // the draw loop of Paper.js
            // (60fps with requestAnimationFrame under the hood)
            paper.view.onFrame = (event) => {
                // using linear interpolation, the circle will move 0.2 (20%)
                // of the distance between its current position and the mouse
                // coordinates per Frame
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
                item.addEventListener(`mouseleave`, (e) => {
                    console.log(`hello everyone ${e}`)
                })
            })
        }

        initHovers()
    }

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
                                {cards.map((cardData, index) => <ContentCard cardData={cardData} key={generateKey(cardData.title)} index={index + 1}/>)}
                            </ScrollContainer>
                        </Parallax>
                    </div>
                    <div className="container">
                        <div className="body-block">
                            <div className="ContentCard__blockTitle" data-aos="fade-right" data-aos-duration="1400">
                                Our Partners
                            </div>
                            { Array.prototype.map.call(siteContent.childNodes, (element, index) => getSiteContent(element, index))}
                        </div>
                    </div>
                </Layout>
            </div>
        </ParallaxProvider>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPage: PropTypes.object.isRequired,
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
  query GhostPageQuery {
    allGhostPage(filter: {slug: {eq: "home"}}) {
        edges {
            node {
                title
                html
            }
        }
    }
    allGhostPost(filter: {tags: {elemMatch: {name: {eq: "#HomePage"}}}}) {
    nodes {
      plaintext
      title
    }
  }
  }
`
