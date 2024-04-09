
import PropTypes from 'prop-types';
const Services = ({icon,mainTitle,subTitle}) => {
    return (
        <div className="flex gap-4 items-start shadow p-3">
            <div>
                <span className="text-3xl">{icon}</span>
            </div>
            <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">{mainTitle}</h3>
                <p className="text-neutral">{subTitle}</p>
            </div>
        </div>
    );
};

export default Services;
Services.propTypes = {
    icon: PropTypes.image,
    mainTitle: PropTypes.string,
    subTitle: PropTypes.string,
}