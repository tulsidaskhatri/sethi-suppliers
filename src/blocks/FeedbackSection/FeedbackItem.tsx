import ReactStars from 'react-stars';
import {Typography} from '../Typography';
interface FeedbackItemProps {
    rating: number;
    name: string;
    message: string;
}
export const FeedbackItem = ({rating, name, message}: FeedbackItemProps) => (
    <div className="FeedbackItem--root">
        <ReactStars count={5} value={rating} edit={false} color2={'#FFD700'} />
        <Typography className="name" text={name} variant="label-8" weight="medium" />
        <Typography text={message} variant="label-8" weight="regular" />
    </div>
);
