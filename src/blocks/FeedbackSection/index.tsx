import './styles.scss';
import {Typography} from '../Typography';
import ReactStars from 'react-stars';
import {Button} from '../Button';
import {FeedbackRequest, I_FeedbackRequest} from '../../requests/feedback';
import {useEffect, useState} from 'react';
import {Loader} from '../../components/Loader';
import {FeedbackItem} from './FeedbackItem';

interface FeedbackSectionProps {
    feedbackListTitle: string;
    primaryText: string;
    secondaryText: string;
    ratingText: string;
    htmlId?: string;
    cssClasses: {name: string}[];
    nameLabel: string;
    phoneLabel: string;
    detailLabel: string;
    detailPlaceholder?: string;
    buttonLabel: string;
}

export const FeedbackSection = ({
    htmlId,
    cssClasses,
    feedbackListTitle,
    primaryText,
    secondaryText,
    nameLabel,
    phoneLabel,
    detailLabel,
    detailPlaceholder,
    ratingText,
    buttonLabel,
}: FeedbackSectionProps) => {
    const [feedback, setFeedback] = useState<I_FeedbackRequest>({
        contact: '',
        message: '',
        name: '',
        rating: 0,
        time: 0,
    });
    const [fetching, setFetching] = useState(false);
    const [adding, setAdding] = useState(false);

    const [feedbackList, setFeedbackList] = useState<I_FeedbackRequest[]>([]);
    useEffect(() => {
        const getFeedbackList = async () => {
            setFetching(true);
            setFeedbackList(await FeedbackRequest.get());
            setFetching(false);
        };
        getFeedbackList();
    }, []);
    return (
        <div className={`FeedbackSection--root ${cssClasses.map((cssClass) => cssClass.name).join(' ')}`} id={htmlId}>
            <div className="container">
                <div className="list-container">
                    {fetching ? (
                        <div className="loader-container">
                            <Loader />
                        </div>
                    ) : (
                        <ul className="list">
                            {feedbackList.map((feedback) => (
                                <li key={feedback.id}>
                                    <FeedbackItem {...feedback} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <Typography className="primary-text" variant="title-5" weight="bold" text={primaryText} />
                <Typography className="secondary-text" variant="label-8" weight="regular" text={secondaryText} />

                <div className="rating">
                    <Typography className="rating-text" variant="label-8" text={ratingText} />
                    <ReactStars
                        count={5}
                        value={feedback.rating}
                        half={false}
                        color2={'#FFD700'}
                        onChange={(newRating) => {
                            setFeedback({...feedback, rating: newRating});
                        }}
                    />
                </div>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setAdding(true);
                        const newFeedbackId = await FeedbackRequest.post(feedback);
                        const newList = ([{...feedback, id: newFeedbackId}] as I_FeedbackRequest[]).concat(
                            feedbackList
                        );
                        setFeedbackList(newList);
                        setAdding(false);
                    }}
                >
                    <div className="fieldset block">
                        <Typography className="label" variant="label-8" text={detailLabel} />
                        <textarea
                            rows={5}
                            className="field fullwidth"
                            placeholder={detailPlaceholder}
                            onChange={(e) => {
                                setFeedback({...feedback, message: e.target.value});
                            }}
                        />
                    </div>
                    <div className="contact">
                        <div className="fieldset inline">
                            <Typography className="label" variant="label-8" text={nameLabel} />
                            <input
                                className="field"
                                onChange={(e) => {
                                    setFeedback({...feedback, name: e.target.value});
                                }}
                            />
                        </div>
                        <div className="fieldset inline">
                            <Typography className="label" variant="label-8" text={phoneLabel} />
                            <input
                                className="field"
                                onChange={(e) => {
                                    setFeedback({...feedback, contact: e.target.value});
                                }}
                            />
                        </div>
                    </div>

                    <Button disabled={adding} type="submit" className="submit-button" content={buttonLabel} />
                </form>
            </div>
        </div>
    );
};
