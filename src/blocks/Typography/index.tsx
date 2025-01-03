import {ComponentBaseProps} from '../../types';
type Variant =
    | 'big-text-1'
    | 'title-1'
    | 'title-2'
    | 'title-3'
    | 'title-4'
    | 'title-5'
    | 'title-6'
    | 'label-1'
    | 'label-2'
    | 'label-3'
    | 'label-4'
    | 'label-5'
    | 'label-6'
    | 'label-7'
    | 'label-8'
    | 'label-9'
    | 'label-10'
    | 'label-11'
    | 'label-12';

type HTMLTextBlockTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps extends ComponentBaseProps {
    text: React.ReactNode;
    variant?: Variant;
    weight?: 'regular' | 'medium' | 'bold' | 'light' | 'extra-light' | 'condensed';
    italic?: boolean;
}

const getHTMLTextBlockTag = (variant: Variant): HTMLTextBlockTag => {
    switch (variant) {
        case 'big-text-1':
        case 'title-1':
        case 'title-2':
            return 'h1';
        case 'title-3':
        case 'title-4':
            return 'h2';
        case 'title-5':
            return 'h3';
        case 'title-6':
            return 'h4';
        case 'label-1':
        case 'label-2':
        case 'label-3':
        case 'label-4':
        case 'label-5':
        case 'label-6':
        case 'label-7':
        case 'label-8':
        case 'label-9':
        case 'label-10':
        case 'label-11':
        case 'label-12':
            return 'p';
        default:
            return 'p';
    }
};

export const Typography = ({
    text,
    variant = 'label-1',
    weight = 'regular',
    italic,
    id,
    className,
    style,
}: TypographyProps) => {
    const Component = getHTMLTextBlockTag(variant);
    const classes = `Typography__${variant} Typography__${weight}${italic ? ' Typography__italic' : ''}${
        className ? ` ${className}` : ''
    }`;
    return (
        <Component className={classes} id={id} style={style}>
            {text}
        </Component>
    );
};
