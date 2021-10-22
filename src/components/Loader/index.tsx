import logo from '../../assets/images/logo192.png';
import './styles.scss';
export const Loader = () => (
    <div className="Loader--root">
        <img className="logo" src={logo} alt="Loading" />
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);
