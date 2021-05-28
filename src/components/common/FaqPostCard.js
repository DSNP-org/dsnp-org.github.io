import React from 'react'
import PropTypes from 'prop-types'
import { Panel, Collapsible } from "cinch-collapsible"
import { generateKey } from "../../utils/keyGenerator"

const FaqPostCard = ({ faqCards }) => (
    <Collapsible>
        {faqCards.map(faqCard => <Panel
            header={
                <div className="FaqPostCard__question">{faqCard.title}</div>}
            key={generateKey(faqCard.title)}
        >
            <div className="FaqPostCard__answer">{faqCard.plaintext}</div>
        </Panel>)}
    </Collapsible>
)

// const [isAnswerShowing, setIsAnswerShowing] = useState(false)
// const [answerClassName, setAnswerClassName] = useState(`FaqPostCard__answer visible`)
// const toggleShowQuestion = () => {
//     const showAnswer = !isAnswerShowing
//     setIsAnswerShowing(!isAnswerShowing)
//     if (showAnswer) {
//         setAnswerClassName(`FaqPostCard__answer visible`)
//     } else {
//         setAnswerClassName(`FaqPostCard__answer`)
//     }
// }

FaqPostCard.propTypes = {
    faqCards: PropTypes.any,
    index: PropTypes.number,
}

export default FaqPostCard
