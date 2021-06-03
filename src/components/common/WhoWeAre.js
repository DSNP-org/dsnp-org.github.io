import React from 'react'
import PropTypes from 'prop-types'

const WhoWeArePostCard = ({ whoWeAreCards }) => <div id="whoWeAre" className="PageAbout__fullHeightSection PageAbout__whoWeAreBlock">
    {whoWeAreCards.map(whoWeAreCard => <div className="container" key={whoWeAreCard.node.id}>
        <h2>{whoWeAreCard.node.title}</h2>
        <section key={whoWeAreCard.node.id} dangerouslySetInnerHTML={{ __html: whoWeAreCard.node.html }} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur, eaque eos facere illum nam nihil tempore veniam voluptatem. Cumque, deleniti, itaque! Delectus doloribus facilis libero nihil optio rem.</p>
    </div>)}
</div>

WhoWeArePostCard.propTypes = {
    whoWeAreCards: PropTypes.any,
}

export default WhoWeArePostCard
