import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Panel, Collapsible } from "cinch-collapsible"

const FaqPostCard = ({ faqCards }) => {
    const [openQuestions, setOpenQuestions] = React.useState([])

    const toggleDisplayAnswers = (id) => {
        if (openQuestions.includes(id)) {
            const filterOpenQuestions = openQuestions.filter(item => item !== id)
            setOpenQuestions(filterOpenQuestions)
        } else {
            setOpenQuestions([...openQuestions, id])
        }
    }

    useEffect(() => {},[openQuestions])

    return <Collapsible>
        {faqCards.map(faqCard => <Panel
            className="FaqPostCard__item"
            key={faqCard.id}
            id={faqCard.id}
            header={
                <div className="FaqPostCard__questionBlock" onClick={() => toggleDisplayAnswers(faqCard.id)}>
                    <h2 className="FaqPostCard__question">{faqCard.title}</h2>
                    <div className={`FaqPostCard__dropdownIcon ${openQuestions.includes(faqCard.id) ? `isOpen` : `isClosed`}`}>❯</div>
                </div>}
        >
            <div className="FaqPostCard__answer">{faqCard.plaintext}</div>
        </Panel>)}
    </Collapsible>
}

FaqPostCard.propTypes = {
    faqCards: PropTypes.any,
    index: PropTypes.number,
}

export default FaqPostCard
